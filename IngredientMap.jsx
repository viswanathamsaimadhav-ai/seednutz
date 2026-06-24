import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function IngredientMap({ ingredients }) {
  const [expanded, setExpanded] = useState(null);

  if (!ingredients || ingredients.length === 0) return null;

  return (
    <div>
      <h3 className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">
        Ingredient Map
      </h3>
      <div className="space-y-1">
        {ingredients.map((ingredient, idx) => (
          <div key={idx} className="border border-border">
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-card transition-colors"
            >
              <span className="font-display text-base">{ingredient.name}</span>
              <ChevronDown
                size={16}
                className={`text-muted-foreground transition-transform duration-300 ${
                  expanded === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {expanded === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 space-y-3">
                    {ingredient.source && (
                      <div>
                        <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground">
                          Source
                        </p>
                        <p className="text-sm font-body text-foreground mt-1">
                          {ingredient.source}
                        </p>
                      </div>
                    )}
                    {ingredient.benefit && (
                      <div>
                        <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground">
                          Health Benefit
                        </p>
                        <p className="text-sm font-body text-foreground mt-1">
                          {ingredient.benefit}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}