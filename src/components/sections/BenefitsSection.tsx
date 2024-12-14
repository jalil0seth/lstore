import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BenefitDescription } from "@/components/sections/descriptions/BenefitDescription";
import { heroData } from "../hero/hero.ts";
import { useState } from "react";

const BenefitsSection = () => {
  const [data] = useState(heroData);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-8 rounded-2xl space-y-6"
    >
      <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
        <Check className="text-primary" size={20} />
        {data.productDetails.heading}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {data.productDetails.description}
      </p>
      
      <div className="grid gap-4">
        {data.productDetails.keyFeatures.map((benefit) => (
          <motion.div
            key={benefit.title}
            whileHover={{ x: 4 }}
            className="group"
          >
            <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
              ✓ {benefit.title}
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BenefitsSection;