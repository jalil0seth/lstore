import { Facebook } from "lucide-react";
import { motion } from "framer-motion";

const FacebookBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1877F2]/10 border border-[#1877F2]/20 text-[#1877F2] px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2"
    >
      <Facebook size={16} />
      <span>Special Facebook-only offer - Save an extra 10%!</span>
    </motion.div>
  );
};

export default FacebookBanner;