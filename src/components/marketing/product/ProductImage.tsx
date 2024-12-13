import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  badge: string;
  icon: LucideIcon;
  index: number;
}

export const ProductImage = ({ src, alt, badge, icon: Icon, index }: ProductImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 shadow-xl shadow-primary/10">
        {/* Badge */}
        <div className="absolute top-3 left-3 z-20">
          <div className="flex items-center gap-1 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            <Icon className="w-3 h-3" />
            {badge}
          </div>
        </div>
        
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm font-medium">{alt}</p>
            <p className="text-white/80 text-xs mt-1">Click to explore</p>
          </div>
        </div>
      </div>
      
      {/* Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};