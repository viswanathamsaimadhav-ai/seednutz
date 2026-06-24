import React from "react";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                From Earth
                <br />
                <span className="text-primary">To Energy</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-1 hidden lg:flex justify-center">
            <div className="w-px h-48 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                At Seednutz, we believe in the extraordinary power locked within 
                nature's smallest packages. Every seed and nut in our collection 
                is sourced from the finest growing regions around the world.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Our meticulous selection process ensures that only the highest 
                quality kernels make it to your hands — raw, roasted, or blended 
                into perfection. No compromises, no shortcuts.
              </p>
              <div className="flex gap-12 pt-4">
                {[
                  { value: "100%", label: "Natural" },
                  { value: "25+", label: "Products" },
                  { value: "12", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-primary">{stat.value}</p>
                    <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}