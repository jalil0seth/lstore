import { CheckCircle2 } from "lucide-react";

const securityFeatures = [
  "Official PayPal Protection",
  "Secure payment processing",
  "Money-back guarantee",
  "Instant delivery"
];

export const SecurityFeatures = () => {
  return (
    <div className="pt-4 border-t border-primary/20">
      <div className="grid grid-cols-2 gap-3">
        {securityFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-xs text-gray-400">
            <CheckCircle2 size={14} className="text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};