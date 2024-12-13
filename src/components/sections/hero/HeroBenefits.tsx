import { Check } from "lucide-react";

const benefits = [
  "Advanced 3D Modeling",
  "Real-time Collaboration",
  "Cloud Storage Included",
  "24/7 Premium Support"
];

export const HeroBenefits = () => {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-md mx-auto text-left">
      {benefits.map((benefit) => (
        <div key={benefit} className="flex items-center gap-2">
          <Check className="w-4 h-4 text-primary" />
          <span className="text-sm text-gray-300">{benefit}</span>
        </div>
      ))}
    </div>
  );
};