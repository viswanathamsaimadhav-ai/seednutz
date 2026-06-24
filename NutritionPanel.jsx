import React from "react";

const nutritionRows = [
  { key: "calories", label: "Calories", unit: "" },
  { key: "total_fat", label: "Total Fat", unit: "" },
  { key: "saturated_fat", label: "  Saturated Fat", unit: "", indent: true },
  { key: "trans_fat", label: "  Trans Fat", unit: "", indent: true },
  { key: "cholesterol", label: "Cholesterol", unit: "" },
  { key: "sodium", label: "Sodium", unit: "" },
  { key: "total_carbohydrates", label: "Total Carbohydrates", unit: "" },
  { key: "dietary_fiber", label: "  Dietary Fiber", unit: "", indent: true },
  { key: "total_sugars", label: "  Total Sugars", unit: "", indent: true },
  { key: "protein", label: "Protein", unit: "" },
  { key: "vitamin_d", label: "Vitamin D", unit: "" },
  { key: "calcium", label: "Calcium", unit: "" },
  { key: "iron", label: "Iron", unit: "" },
  { key: "potassium", label: "Potassium", unit: "" },
];

export default function NutritionPanel({ facts }) {
  if (!facts) return null;

  return (
    <div className="bg-foreground text-background p-6 max-w-sm">
      <h3 className="font-display text-2xl border-b-8 border-background pb-1 mb-1">
        Nutrition Facts
      </h3>
      {facts.serving_size && (
        <p className="text-xs font-body pb-2 border-b border-background/30">
          Serving Size {facts.serving_size}
        </p>
      )}

      <div className="mt-2">
        {nutritionRows.map((row) => {
          const value = facts[row.key];
          if (!value && value !== 0) return null;
          const isCal = row.key === "calories";
          return (
            <div
              key={row.key}
              className={`flex justify-between py-1 border-b border-background/20 ${
                row.indent ? "pl-4" : ""
              }`}
            >
              <span
                className={`text-xs font-body ${
                  isCal ? "text-lg font-bold" : row.indent ? "font-normal" : "font-semibold"
                }`}
              >
                {row.label}
              </span>
              <span className={`text-xs font-body ${isCal ? "text-lg font-bold" : "font-medium"}`}>
                {value}{row.unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}