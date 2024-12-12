import { motion } from "framer-motion";
import { Shield, Gift, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/marketing/CountdownTimer";

const HeroSection = () => {
  const features = [
    { icon: Shield, text: "PayPal Protected" },
    { icon: Gift, text: "$299 Bonus Templates" },
    { icon: Zap, text: "Instant Access" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <Badge variant="secondary" className="animate-bounce">
          🎉 FLASH SALE - 50% OFF TODAY
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
          AutoCAD 2024 Professional
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Join 50,000+ professionals who trust our industry-leading CAD software
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <CountdownTimer />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {features.map(({ icon: Icon, text }) => (
          <motion.div
            key={text}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-sm bg-primary/5 px-4 py-2 rounded-full"
          >
            <Icon className="text-primary" size={16} />
            <span className="text-gray-200">{text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;