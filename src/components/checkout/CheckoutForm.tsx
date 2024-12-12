import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { NameInput } from "./NameInput";
import { EmailInput } from "./EmailInput";
import { PriceDisplay } from "./PriceDisplay";
import { PayPalButton } from "./PayPalButton";
import { SecurityFeatures } from "./SecurityFeatures";
import { toast } from "sonner";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please enter your name and email");
      return;
    }
    toast.success("Redirecting to PayPal...");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-8 rounded-xl glass-card border border-primary/20"
    >
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-center gap-2 text-primary font-semibold">
          <Gift className="animate-pulse" />
          <span>Special Bonus: Premium Templates</span>
        </div>
        <div className="text-center text-sm text-gray-400">
          Worth $299 - Included with your purchase today!
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <NameInput value={name} onChange={setName} />
          <EmailInput value={email} onChange={setEmail} />
        </div>

        <PriceDisplay />
        <PayPalButton />
        <SecurityFeatures />
      </form>
    </motion.div>
  );
};

export default CheckoutForm;