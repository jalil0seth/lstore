import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Gift, CheckCircle2, User, Mail } from "lucide-react";
import { toast } from "sonner";

const PayPalCheckout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please enter your name and email");
      return;
    }
    // Here you would integrate with PayPal
    toast.success("Redirecting to PayPal...");
  };

  const securityFeatures = [
    "Official PayPal Protection",
    "Secure payment processing",
    "Money-back guarantee",
    "Instant delivery"
  ];

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
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Full Name
              <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg input-focus text-white"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Email for License Delivery
              <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg input-focus text-white"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-1">
            <div className="text-2xl font-bold">$599</div>
            <div className="text-sm text-gray-400 line-through">Regular Price: $1,199</div>
            <div className="text-primary font-semibold">Save 50% Today!</div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#0070ba] hover:bg-[#003087] text-white py-4 px-6 rounded-lg font-medium transition-colors"
          >
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" className="h-5" />
            Checkout Securely
          </button>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-3">
            {securityFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 size={14} className="text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <Clock size={16} />
          Limited time offer - Secure your license now!
        </p>
      </div>
    </motion.div>
  );
};

export default PayPalCheckout;