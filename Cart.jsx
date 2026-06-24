import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="min-h-screen pt-20">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">Your</p>
            <h1 className="font-display text-5xl lg:text-6xl">
              Shopping <span className="text-primary">Cart</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 border border-border mb-6">
              <ShoppingBag size={24} className="text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl mb-3">Your cart is empty</h2>
            <p className="text-muted-foreground font-body mb-8">
              Start exploring our premium nuts and seeds collection.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-primary/90"
            >
              <ArrowLeft size={14} />
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Cart items */}
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      className="border border-border p-6 flex gap-6"
                    >
                      {/* Product image */}
                      <Link
                        to={`/products/${item.product.id}`}
                        className="w-24 h-24 flex-shrink-0 bg-card border border-border/50 overflow-hidden"
                      >
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      {/* Product details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/products/${item.product.id}`}
                          className="font-display text-lg hover:text-primary transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs font-body tracking-[0.2em] uppercase text-primary mt-1">
                          {item.product.category?.replace(/_/g, " ")}
                        </p>
                        {item.product.packaging_details && (
                          <p className="text-xs text-muted-foreground mt-2 font-body">
                            {item.product.packaging_details}
                          </p>
                        )}
                      </div>

                      {/* Price & Quantity */}
                      <div className="flex flex-col items-end gap-3">
                        {item.product.price != null && (
                          <p className="font-display text-lg">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        )}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-border">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-card transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-10 h-10 flex items-center justify-center text-sm font-body border-x border-border">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-card transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        {item.product.price != null && (
                          <p className="text-xs text-muted-foreground font-body">
                            ${item.product.price.toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Link
                  to="/products"
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <ArrowLeft size={14} />
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-sm font-body text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-4">
              <div className="border border-border p-8 lg:sticky lg:top-28">
                <h3 className="font-display text-xl mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">
                        {item.product.name} × {item.quantity}
                      </span>
                      {item.product.price != null && (
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="h-px bg-border mb-6" />
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-body text-muted-foreground">Subtotal</span>
                  <span className="text-sm font-body">
                    ${items.reduce((sum, i) => sum + (i.product.price || 0) * i.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-8">
                  <span className="text-sm font-body tracking-widest uppercase">Total</span>
                  <span className="font-display text-xl text-primary">
                    ${items.reduce((sum, i) => sum + (i.product.price || 0) * i.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <Link
                  to="/checkout"
                  className="w-full bg-primary text-primary-foreground py-6 text-sm font-body tracking-widest uppercase hover:bg-primary/90 rounded-none inline-flex items-center justify-center"
                >
                  Proceed to Checkout
                </Link>
                <p className="text-xs text-muted-foreground text-center mt-4 font-body">
                  Secure payment powered by Stripe
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}