import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "../hero/hero.ts";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: parseInt(heroData.countdown.hours),
    minutes: parseInt(heroData.countdown.minutes),
    seconds: parseInt(heroData.countdown.seconds),
  });

  const [progress, setProgress] = useState(100);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (timeLeft.minutes === 58 && timeLeft.hours === 0 && !isFixed) {
      setIsFixed(true);
      return;
    }

    if (isFixed) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });

      setProgress((prev) => Math.max(prev - 0.2, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFixed]);

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed bottom-20 left-0 right-0 mx-4 md:relative md:bottom-auto md:mx-0 z-10"
    >
      <motion.div 
        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-primary/20 shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <h3 className="text-primary font-semibold flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Timer className="w-4 h-4" />
          </motion.div>
          Special Offer Ends Soon
        </h3>
        <div className="w-full max-w-xs">
          <motion.div 
            className="w-full h-2 bg-primary/10 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              animate={{ 
                width: `${progress}%`,
              }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          <motion.div 
            className="mt-2 text-center text-sm text-primary font-medium"
            key={`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {timeLeft.hours > 0 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {String(timeLeft.hours).padStart(2, "0")}:
              </motion.span>
            )}
            {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CountdownTimer;