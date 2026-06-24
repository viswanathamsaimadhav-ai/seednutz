import React from "react";
import { X } from "lucide-react";

const categoryOptions = [
  { value: "nuts", label: "Nuts" },
  { value: "seeds", label: "Seeds" },
  { value: "trail_mix", label: "Trail Mix" },
  { value: "nut_butters", label: "Nut Butters" },
  { value: "snack_bars", label: "Snack Bars" },
  { value: "roasted_blends", label: "Roasted Blends" },
];

const flavorOptions = [
  { value: "original", label: "Original" },
  { value: "salted", label: "Salted" },
  { value: "honey_roasted", label: "Honey Roasted" },
  { value: "spicy", label: "Spicy" },
  { value: "chocolate", label: "Chocolate" },
  { value: "savory_herb", label: "Savory Herb" },
  { value: "smoked", label: "Smoked" },
  { value: "plain", label: "Plain" },
];

const dietaryOptions = [
  { value: "vegan", label: "Vegan" },
  { value: "gluten_free", label: "Gluten-Free" },
  { value: "sugar_free", label: "Sugar-Free" },
  { value: "high_protein", label: "High Protein" },
  { value: "organic", label: "Organic" },
  { value: "keto", label: "Keto" },
  { value: "non_gmo", label: "Non-GMO" },
];

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="mb-8">
      <h4 className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected.includes(option.value);
          return (
            <button
              key={option.value}
              onClick={() => onToggle(option.value)}
              className={`px-4 py-2 text-xs font-body tracking-wider uppercase border transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterEngine({ filters, onFilterChange, onClearAll }) {
  const hasFilters =
    filters.categories.length > 0 ||
    filters.flavors.length > 0 ||
    filters.dietary.length > 0;

  const toggle = (key, value) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  return (
    <div>
      {hasFilters && (
        <button
          onClick={onClearAll}
          className="flex items-center gap-2 text-xs font-body tracking-widest uppercase text-primary hover:text-foreground transition-colors mb-6"
        >
          <X size={14} />
          Clear All Filters
        </button>
      )}

      <FilterGroup
        title="Category"
        options={categoryOptions}
        selected={filters.categories}
        onToggle={(val) => toggle("categories", val)}
      />
      <FilterGroup
        title="Flavor"
        options={flavorOptions}
        selected={filters.flavors}
        onToggle={(val) => toggle("flavors", val)}
      />
      <FilterGroup
        title="Dietary"
        options={dietaryOptions}
        selected={filters.dietary}
        onToggle={(val) => toggle("dietary", val)}
      />
    </div>
  );
}