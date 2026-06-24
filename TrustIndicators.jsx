import React from "react";
import { motion } from "framer-motion";
import { Leaf, Shield, Award, Heart } from "lucide-react";

const indicators = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No artificial additives, preservatives, or flavoring agents",
  },
  {
    icon: Shield,
    title: "Quality Certified",
    description: "Every batch tested to meet the highest food safety standards",
  },
  {
    icon: Award,
    title: "Premium Sourced",
    description: "Handpicked from the finest growing regions worldwide",
  },
  {
    icon: Heart,
    title: "Nutrient Dense",
    description: "Maximizing nutritional value in every serving",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {indicators.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 border border-primary/30 mb-6">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}