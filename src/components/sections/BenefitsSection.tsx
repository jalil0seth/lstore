import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BenefitDescription } from "@/components/sections/descriptions/BenefitDescription";

const benefits = [
  {
    title: "✓ Lifetime Updates & Support",
    description: "Never pay for updates again - includes all future versions"
  },
  {
    title: "✓ Commercial License Included",
    description: "Use for personal and commercial projects with no restrictions"
  },
  {
    title: "✓ Premium Template Library",
    description: "$299 value - Get instant access to 500+ professional templates"
  },
  {
    title: "✓ 30-Day Money-Back Guarantee",
    description: "Try it risk-free with our no-questions-asked refund policy"
  },
  {
    title: "✓ Instant Digital Delivery",
    description: "Get started immediately after purchase - no waiting"
  },
  {
    title: "✓ Professional Training Resources",
    description: "Step-by-step video tutorials and documentation included"
  }
];

const BenefitsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-8 rounded-2xl space-y-6"
    >
      <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
        <Check className="text-primary" size={20} />
        Everything You Need to Succeed
      </h3>

      <BenefitDescription />
      
      <div className="grid gap-4">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            whileHover={{ x: 4 }}
            className="group"
          >
            <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
              {benefit.title}
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