import { motion } from "framer-motion";
import CountdownTimer from "@/components/marketing/CountdownTimer";
import { HeroTitle } from "./hero/HeroTitle";
import { HeroBenefits } from "./hero/HeroBenefits";
import { HeroFeatures } from "./hero/HeroFeatures";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-8"
    >
      <HeroTitle />
      
      <div className="max-w-2xl mx-auto space-y-4">
        <HeroBenefits />
      </div>

      <div className="max-w-md mx-auto">
        <CountdownTimer />
      </div>

    </motion.div>
  );
};

export default HeroSection;