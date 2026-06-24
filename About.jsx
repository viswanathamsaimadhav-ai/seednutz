import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Eye, Gem, Factory, Leaf, Globe } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Natural Integrity",
    description: "We never compromise on the purity of our ingredients. What grows from the earth, reaches you unaltered.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "Every ingredient is traceable. Every nutrition fact is verified. We believe you deserve to know exactly what fuels you.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We source from the world's finest growing regions and maintain rigorous quality standards at every step.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Responsible sourcing and eco-conscious packaging. We're committed to protecting the planet that nourishes us.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    description: "We partner with trusted growers across 12 countries, selecting only the finest quality harvests from regions known for optimal growing conditions.",
  },
  {
    step: "02",
    title: "Selection",
    description: "Every batch undergoes rigorous inspection. Only kernels that meet our exacting size, color, and moisture standards are approved.",
  },
  {
    step: "03",
    title: "Processing",
    description: "State-of-the-art facilities ensure gentle roasting, precise seasoning, and careful blending to preserve natural nutrition and flavor.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Independent lab testing, allergen verification, and food safety audits at every stage. Nothing leaves our facility without certification.",
  },
  {
    step: "05",
    title: "Packaging",
    description: "Nitrogen-flushed, resealable packaging locks in freshness and extends shelf life, delivering peak quality from our hands to yours.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
          <img
            src="https://media.base44.com/images/public/6a2e44b0e093724cb72b72aa/efeb0dc69_generated_0b2f3dcb.png"
            alt="Hands holding premium mixed nuts"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
                Our Story
              </p>
              <h1 className="font-display text-5xl lg:text-7xl">
                The Seednutz
                <br />
                <span className="text-primary">Journey</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
                Who We Are
              </p>
              <h2 className="font-display text-4xl leading-tight mb-6">
                Born from a passion for nature's most potent fuel
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Seednutz was founded with a simple yet powerful belief: the best nutrition 
                comes directly from nature. Our founders, driven by a quest for clean, 
                honest food, set out to create a brand that would never compromise on 
                quality or transparency.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Today, we've grown into a trusted name in premium nuts and seeds, serving 
                health-conscious consumers and businesses across the country. But our 
                mission remains the same — to deliver nature's finest energy sources with 
                uncompromising integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary pl-8"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 border border-primary/30 mb-4">
                <Globe size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To make premium, nutrient-dense food accessible to everyone. We commit 
                to sourcing the finest raw materials, maintaining the highest quality 
                standards, and providing complete transparency in everything we produce.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-2 border-primary pl-8"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 border border-primary/30 mb-4">
                <Factory size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-4">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To become the world's most trusted name in premium nut and seed products — 
                setting the global standard for quality, nutrition, and sustainability in 
                the food industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
              What Drives Us
            </p>
            <h2 className="font-display text-4xl">
              Our <span className="text-primary">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-border p-8 hover:border-primary/30 transition-colors duration-500"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 border border-primary/30 mb-6">
                  <val.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display text-lg mb-3">{val.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
              Seed to Shelf
            </p>
            <h2 className="font-display text-4xl">
              Our <span className="text-primary">Process</span>
            </h2>
          </motion.div>

          <div className="space-y-1">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-border p-8 flex flex-col sm:flex-row gap-6 sm:gap-12 hover:border-primary/30 transition-colors duration-500"
              >
                <span className="font-display text-4xl text-primary/30">{step.step}</span>
                <div>
                  <h3 className="font-display text-xl mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Whether you're a customer, distributor, or potential partner — we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-body tracking-widest uppercase hover:bg-primary/90 transition-all"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}