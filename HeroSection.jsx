import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a2e44b0e093724cb72b72aa/9be331f67_generated_cddad7bc.png"
          alt="Premium seeds and nuts in dramatic lighting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-6">
                Premium Nuts & Seeds
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight">
                POWERED
                <br />
                BY THE
                <br />
                <span className="text-primary">CORE</span>
              </h1>
              <p className="mt-8 text-muted-foreground font-body text-lg leading-relaxed max-w-md">
                Nature's most potent fuel, perfected. Every kernel selected for 
                peak nutrition, every blend crafted for extraordinary taste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-body tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-body tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seed-stroke decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}