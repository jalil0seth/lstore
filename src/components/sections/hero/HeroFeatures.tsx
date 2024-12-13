import { motion } from "framer-motion";
import { Shield, Gift, Zap } from "lucide-react";

const features = [
  { icon: Shield, text: "PayPal Protected", color: "text-blue-400" },
  { icon: Gift, text: "$299 Bonus Templates", color: "text-purple-400" },
  { icon: Zap, text: "Instant Access", color: "text-yellow-400" }
];

export const HeroFeatures = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {features.map(({ icon: Icon, text, color }) => (
        <motion.div
          key={text}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg"
        >
          <Icon className={`${color}`} size={16} />
          <span className="text-sm font-medium">{text}</span>
        </motion.div>
      ))}
    </div>
  );
};