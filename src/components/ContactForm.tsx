import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, CreditCard, Shield, Clock, Gift, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !cardNumber || !expiry || !cvv) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Processing your order...");
  };

  const securityFeatures = [
    "256-bit SSL encryption",
    "Secure payment processing",
    "PCI DSS compliant",
    "Money-back guarantee"
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200/20 shadow-xl"
      >
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <Gift className="animate-pulse" />
            <span>Special Bonus: Free Premium Templates</span>
          </div>
          <div className="text-center text-sm text-gray-400">
            Worth $299 - Included with your purchase today!
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Card Number</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Shield size={20} />
            Secure Checkout - Save $600 Today
          </motion.button>

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
    </AnimatePresence>
  );
};

export default ContactForm;