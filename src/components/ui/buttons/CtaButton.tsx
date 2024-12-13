import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
}

export const CtaButton = ({ 
  children, 
  icon = true, 
  className,
  ...props 
}: CtaButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-colors",
        className
      )}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </motion.button>
  );
};