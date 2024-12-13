import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Gift, CheckCircle2, Star } from "lucide-react";
import { toast } from "sonner";
import { CheckoutForm } from "./checkout/CheckoutForm";
import { CheckoutHeader } from "./checkout/CheckoutHeader";
import { SecurityFeatures } from "./checkout/SecurityFeatures";
import { PriceDisplay } from "./checkout/PriceDisplay";

const PayPalCheckout = () => {
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
      className="w-full max-w-md mx-auto"
      data-checkout-form
    >
      <div className="relative">
        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
        />
        
        {/* Main Card */}
        <div className="relative glass-card rounded-2xl border border-gray-200/50 shadow-xl">
          <CheckoutHeader />
          
          <div className="p-4 sm:p-6 space-y-6">
            <CheckoutForm
              name={name}
              email={email}
              onNameChange={setName}
              onEmailChange={setEmail}
              onSubmit={handleSubmit}
            />
            <SecurityFeatures />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p className="flex items-center justify-center gap-2">
          <Clock size={16} />
          Limited time offer - Secure your license now!
        </p>
      </div>
    </motion.div>
  );
};

export default PayPalCheckout;