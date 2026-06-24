import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Premium Nuts",
    slug: "nuts",
    image: "https://media.base44.com/images/public/6a2e44b0e093724cb72b72aa/37c351310_generated_dba5177f.png",
    description: "Hand-selected almonds, cashews, and more",
  },
  {
    name: "Seeds",
    slug: "seeds",
    image: "https://media.base44.com/images/public/6a2e44b0e093724cb72b72aa/a31f63fb5_generated_f714138a.png",
    description: "Nature's most nutrient-dense superfoods",
  },
  {
    name: "Trail Mixes",
    slug: "trail_mix",
    image: "https://media.base44.com/images/public/6a2e44b0e093724cb72b72aa/429697580_generated_1df5a2ae.png",
    description: "Expertly crafted blends for every adventure",
  },
  {
    name: "Nut Butters",
    slug: "nut_butters",
    image: "https://media.base44.com/images/public/6a2e44b0e093724cb72b72aa/23e838e36_generated_9539c8b6.png",
    description: "Smooth and crunchy, pure and unprocessed",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
            Explore
          </p>
          <h2 className="font-display text-4xl lg:text-5xl">
            Product <span className="text-primary">Categories</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                to={`/products?category=${cat.slug}`}
                className="group block relative overflow-hidden aspect-[4/3]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-foreground">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 font-body">
                        {cat.description}
                      </p>
                    </div>
                    <div className="bg-primary text-primary-foreground p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}