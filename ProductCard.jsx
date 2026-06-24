import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/CartContext";

export default function ProductCard({ product, index }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="group block relative">
        <Link to={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-card border border-border/50 mb-4 relative">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {product.nutrient_usp && (
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 border border-border">
                <p className="text-xs font-body tracking-wider text-primary font-medium">
                  {product.nutrient_usp}
                </p>
              </div>
            )}
          </div>
          <div className="space-y-1.5">
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-primary">
              {product.category?.replace(/_/g, " ")}
            </p>
            <h3 className="font-display text-lg group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
            {product.short_description && (
              <p className="text-sm text-muted-foreground font-body line-clamp-2">
                {product.short_description}
              </p>
            )}
            {product.dietary_tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.dietary_tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-body tracking-wider uppercase text-muted-foreground border border-border px-2 py-0.5"
                  >
                    {tag.replace(/_/g, " ")}
                  </span>
                ))}
              </div>
            )}
            {product.price != null && (
              <p className="text-sm font-body text-foreground pt-1 font-medium">
                ${product.price.toFixed(2)}
              </p>
            )}
            </div>
        </Link>
        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center hover:bg-primary/90"
          title="Add to cart"
        >
          <ShoppingBag size={14} />
        </button>
      </div>
    </motion.div>
  );
}