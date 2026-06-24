import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Lock, Loader2, CheckCircle } from "lucide-react";

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

function formatPrice(cents) {
  return "$" + (cents / 100).toFixed(2);
}

function CheckoutForm({ total, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleField = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError("");

    const card = elements.getElement(CardElement);
    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: form.name,
        email: form.email,
        address: {
          line1: form.address,
          city: form.city,
          state: form.state,
          postal_code: form.zip,
        },
      },
    });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    // Payment method created; in production, send paymentMethod.id to your server
    // to create a PaymentIntent and confirm. For now, we simulate success.
    onSuccess();
    setProcessing(false);
  };

  if (!stripeKey) {
    return (
      <div className="border border-border p-8 text-center">
        <p className="text-muted-foreground font-body mb-2">
          Stripe is not yet configured. Please add your Stripe keys.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">Shipping Details</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">Full Name</p>
          <Input required value={form.name} onChange={(e) => handleField("name", e.target.value)} className="bg-card border-border h-12" />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">Email</p>
          <Input required type="email" value={form.email} onChange={(e) => handleField("email", e.target.value)} className="bg-card border-border h-12" />
        </div>
      </div>

      <div className="space-y-1.5">
        <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">Address</p>
        <Input required value={form.address} onChange={(e) => handleField("address", e.target.value)} className="bg-card border-border h-12" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">City</p>
          <Input required value={form.city} onChange={(e) => handleField("city", e.target.value)} className="bg-card border-border h-12" />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">State</p>
          <Input required value={form.state} onChange={(e) => handleField("state", e.target.value)} className="bg-card border-border h-12" />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">ZIP</p>
          <Input required value={form.zip} onChange={(e) => handleField("zip", e.target.value)} className="bg-card border-border h-12" />
        </div>
      </div>

      <div className="h-px bg-border" />

      <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">Payment</p>

      <div className="border border-border p-4 bg-card">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "14px",
                color: "#F5F5F1",
                "::placeholder": { color: "#8c8c8c" },
                fontFamily: "Inter, sans-serif",
              },
              invalid: { color: "#ef4444" },
            },
          }}
        />
      </div>

      {error && (
        <p className="text-sm text-destructive font-body">{error}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-primary text-primary-foreground h-14 text-sm font-body tracking-widest uppercase hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-3 rounded-none"
      >
        {processing ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Lock size={14} />
            Pay {formatPrice(total)}
          </>
        )}
      </button>
    </form>
  );
}

export default function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentComplete, setPaymentComplete] = useState(false);

  const subtotal = items.reduce((sum, i) => sum + (i.product.price || 0) * i.quantity, 0);
  const totalCents = Math.round(subtotal * 100);

  if (items.length === 0 && !paymentComplete) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center gap-6">
        <p className="font-display text-2xl">Your cart is empty</p>
        <Link to="/products" className="text-primary text-sm font-body tracking-widest uppercase">
          Browse Products
        </Link>
      </div>
    );
  }

  const handleSuccess = () => {
    setPaymentComplete(true);
    clearCart();
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">Secure</p>
            <h1 className="font-display text-5xl lg:text-6xl">
              Check<span className="text-primary">out</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {paymentComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto border border-border p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/30 mb-6">
              <CheckCircle size={28} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl mb-3">Order Confirmed</h2>
            <p className="text-muted-foreground font-body mb-2">
              Thank you for your purchase! Your order has been received and is being processed.
            </p>
            <p className="text-xs text-muted-foreground font-body mb-8">
              A confirmation email will be sent shortly.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-primary/90"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Checkout form */}
            <div className="lg:col-span-8">
              <Elements stripe={stripePromise}>
                <CheckoutForm total={totalCents} onSuccess={handleSuccess} />
              </Elements>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-4">
              <div className="border border-border p-8 lg:sticky lg:top-28">
                <h3 className="font-display text-xl mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground truncate mr-2">
                        {item.product.name} × {item.quantity}
                      </span>
                      {item.product.price != null && (
                        <span className="flex-shrink-0">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="h-px bg-border mb-4" />
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground font-body">Subtotal</span>
                  <span className="font-body">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-muted-foreground font-body">Shipping</span>
                  <span className="font-body">Calculated at next step</span>
                </div>
                <div className="h-px bg-border mb-4" />
                <div className="flex justify-between mb-6">
                  <span className="text-sm font-body tracking-widest uppercase">Total</span>
                  <span className="font-display text-xl text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <Link
                  to="/cart"
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <ArrowLeft size={14} />
                  Back to Cart
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}