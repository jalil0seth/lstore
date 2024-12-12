import { CheckCircle2 } from "lucide-react";

export const SecurityFeatures = () => {
  const features = [
    "Official PayPal Protection",
    "Secure payment processing",
    "Money-back guarantee",
    "Instant delivery"
  ];

  return (
    <div className="pt-4 border-t border-gray-700">
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-xs text-gray-400">
            <CheckCircle2 size={14} className="text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};