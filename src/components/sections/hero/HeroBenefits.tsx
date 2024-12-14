import { Check } from "lucide-react";
import { heroData } from "../../hero/hero.ts";

export const HeroBenefits = () => {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-md mx-auto text-left">
      {heroData.features.map((benefit, index) => (
        <div key={benefit} className="flex items-center gap-2">
          <Check className="w-4 h-4 text-primary" />
          <span className="text-sm text-gray-700">{benefit}</span>
        </div>
      ))}
    </div>
  );
};