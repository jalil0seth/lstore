import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
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
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20"
    >
      <h3 className="text-primary font-semibold">Special Offer Ends In:</h3>
      <div className="flex items-center gap-4">
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </motion.div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-xs text-gray-400 mt-1">{label}</div>
  </div>
);

export default CountdownTimer;