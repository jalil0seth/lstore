import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroData } from "../../hero/hero.ts";
import { useState } from "react";

export const HeroTitle = () => {
  const [data] = useState(heroData);
  
  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-2 rounded-full inline-flex items-center gap-2 mx-auto">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Star className="w-5 h-5 text-yellow-500" />
        </motion.div>
        <span className="text-sm font-medium text-default">{`${data.title} - ${data.saveAmount}`}</span>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-400">
            {data.productName}
          </span>
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-default">
            {data.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};