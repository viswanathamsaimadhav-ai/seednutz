import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-6">
            Ready to Fuel Up?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
            Discover Your
            <br />
            <span className="text-primary">Perfect Blend</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body text-lg max-w-lg mx-auto leading-relaxed">
            Whether you're fueling a workout or crafting the perfect snack,
            we have the right combination for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-body tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Browse Products
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-body tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}