import { CheckCircle2 } from "lucide-react";
import { heroData } from "../hero/hero.ts";
import { useState } from "react";

const securityFeatures = [
  "Official PayPal Protection",
  "Secure payment processing",
  "Money-back guarantee",
  "Instant delivery"
];

export const SecurityFeatures = () => {
  const [data] = useState(heroData);

  return (
    <div className="pt-4 border-t border-subtle">
      <div className="grid grid-cols-2 gap-3">
        {data.paymentFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-xs text-muted">
            <CheckCircle2 size={14} className="text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};