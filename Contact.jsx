import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "wholesale", label: "Wholesale" },
  { value: "distribution", label: "Distribution" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.Inquiry.create(form);

    // Send email notification
    await base44.integrations.Core.SendEmail({
      to: form.email,
      subject: "Thank you for contacting Seednutz",
      body: `Dear ${form.full_name},\n\nThank you for reaching out to Seednutz. We have received your ${form.inquiry_type || "general"} inquiry and will get back to you within 24-48 hours.\n\nYour message:\n"${form.message}"\n\nBest regards,\nThe Seednutz Team`,
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
              Connect
            </p>
            <h1 className="font-display text-5xl lg:text-6xl">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl">
              We'd love to hear from you. Whether it's a question about our products,
              a wholesale inquiry, or a partnership opportunity.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Contact Details
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">
                        Email
                      </p>
                      <p className="text-sm font-body text-foreground">info@seednutz.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">
                        Phone
                      </p>
                      <p className="text-sm font-body text-foreground">+1 (555) 234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">
                        Address
                      </p>
                      <p className="text-sm font-body text-foreground">
                        123 Harvest Lane
                        <br />
                        Portland, OR 97201
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                    <span
                      key={social}
                      className="text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-border p-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/30 mb-6">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-3">Message Sent</h3>
                <p className="text-muted-foreground font-body max-w-md mx-auto">
                  Thank you for reaching out. We've received your inquiry and will
                  get back to you within 24-48 hours. A confirmation email has been sent.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ full_name: "", email: "", phone: "", inquiry_type: "", message: "" });
                  }}
                  className="mt-8 text-sm font-body tracking-widest uppercase text-primary hover:text-foreground transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                className="border border-border p-8 lg:p-12 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                      Full Name *
                    </Label>
                    <Input
                      required
                      value={form.full_name}
                      onChange={(e) => handleChange("full_name", e.target.value)}
                      className="bg-card border-border focus:border-primary h-12 font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                      Email Address *
                    </Label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-card border-border focus:border-primary h-12 font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-card border-border focus:border-primary h-12 font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                      Inquiry Type
                    </Label>
                    <Select
                      value={form.inquiry_type}
                      onValueChange={(val) => handleChange("inquiry_type", val)}
                    >
                      <SelectTrigger className="bg-card border-border h-12 font-body">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                    Message *
                  </Label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    className="bg-card border-border focus:border-primary font-body resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-6 text-sm font-body tracking-widest uppercase hover:bg-primary/90 rounded-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}