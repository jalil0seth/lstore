import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Gift, CheckCircle2, Star } from "lucide-react";
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
      className="w-full max-w-md mx-auto"
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
        <div className="relative glass-card rounded-2xl border-2 border-primary/20 shadow-2xl shadow-primary/10">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-t-2xl p-4 border-b border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
              <div className="text-primary font-bold">Save 50%</div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <Gift className="animate-pulse" />
                <span>Premium Templates Included</span>
              </div>
              <div className="text-sm text-gray-400">
                Worth $299 - Free with your purchase today!
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg input-focus text-white placeholder-gray-400"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg input-focus text-white placeholder-gray-400"
                  placeholder="Email for License Delivery"
                />
              </div>

              <div className="space-y-4">
                <div className="text-center space-y-1">
                  <div className="text-3xl font-bold text-primary">$599</div>
                  <div className="text-sm text-gray-400 line-through">Regular Price: $1,199</div>
                  <div className="text-primary font-semibold">Save 50% Today!</div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0070ba] hover:bg-[#003087] text-white py-4 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  <img 
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" 
                    alt="PayPal" 
                    className="h-5"
                  />
                  Checkout Securely
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-primary/20">
              <div className="grid grid-cols-2 gap-3">
                {securityFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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