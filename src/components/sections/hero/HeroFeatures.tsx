import { motion } from "framer-motion";
import { Clock, Gift, Zap } from "lucide-react";
import { useHeroStore } from "../../hero/hero.ts";

export const HeroFeatures = () => {
  const { heroData, isLoading } = useHeroStore();
  
  if (isLoading || !heroData?.benefits) return null;

  const features = [
    { icon: Clock, text: heroData.benefits[0], color: "text-blue-400" },
    { icon: Gift, text: heroData.benefits[1], color: "text-purple-400" },
    { icon: Zap, text: heroData.benefits[2], color: "text-yellow-400" }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {features.map(({ icon: Icon, text, color }, index) => (
        <motion.div
          key={`feature-${index}`}
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