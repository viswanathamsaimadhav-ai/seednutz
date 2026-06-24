import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";

export default function ProductHighlights() {
  const { data: products = [] } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => base44.entities.Product.filter({ is_featured: true }, "-created_date", 4),
  });

  if (products.length === 0) return null;

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-4">
              Featured
            </p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Our <span className="text-primary">Selection</span>
            </h2>
          </motion.div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            View All Products
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/products/${product.id}`} className="group block">
                <div className="aspect-square overflow-hidden bg-card mb-4">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-body tracking-[0.2em] uppercase text-primary">
                    {product.category?.replace(/_/g, " ")}
                  </p>
                  <h3 className="font-display text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  {product.nutrient_usp && (
                    <p className="text-sm text-muted-foreground font-body">
                      {product.nutrient_usp}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}