import { motion } from "framer-motion";
import { X, ArrowRight, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { heroData } from "../hero/hero.ts";

interface OrderSummaryProps {
  fullName: string;
  companyName?: string;
  email: string;
  onClose: () => void;
  onSkip: () => void;
  orderId?: string;
  orderUrl?: string;
}

export const OrderSummary = ({
  fullName,
  companyName,
  email,
  onClose,
  onSkip,
  orderId,
  orderUrl
}: OrderSummaryProps) => {
  const [timeLeft, setTimeLeft] = useState(20);
  const [data] = useState(heroData);
  const date = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleRedirect = () => {
    if (orderUrl) {
      window.location.href = orderUrl;
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      handleRedirect();
    }
  }, [timeLeft, orderUrl]);

  const progressPercentage = ((20 - timeLeft) / 20) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white w-full h-full sm:h-auto sm:rounded-2xl shadow-xl sm:max-w-2xl sm:w-full sm:m-4"
      >
        <div className="sticky top-0 bg-white z-10 p-4 border-b">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold text-gray-900 text-center">Order Summary</h2>
        </div>

        {!orderId || !orderUrl ? (
          <div className="flex flex-col items-center justify-center p-12 space-y-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-12 h-12 text-primary" />
            </motion.div>
            <p className="text-gray-600">Processing your order...</p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4 overflow-y-auto">
              {/* Main Content */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                {/* Order Info */}
                <div className="flex justify-between items-center hover:brightness-0 hover:invert transition-all duration-200">
                  <p className="text-sm text-gray-600">Date: {date}</p>
                  <img 
                    src="https://store.softsos.com/payment-logos/paypal.svg" 
                    alt="PayPal" 
                    className="h-6"
                  />
                </div>

                {/* Order ID if available */}
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Order ID:</p>
                  <p className="font-mono text-blue-600 font-medium">{orderId}</p>
                </div>

                {/* Price Summary */}
                <div className="space-y-2 bg-white rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Premium License</span>
                    <span className="text-sm font-medium">{data.pricing.currentPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Regular Price</span>
                    <span className="line-through">{data.pricing.regularPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-green-600">
                    <span>You Save</span>
                    <span>{data.pricing.saveText}</span>
                  </div>
                </div>

                {/* Customer Info - Condensed */}
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">{fullName}</p>
                  {companyName && <p className="text-sm text-gray-600">{companyName}</p>}
                  <p className="text-sm text-gray-600">{email}</p>
                </div>

                {/* Process Steps - Simplified */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-blue-900 mb-3">What happens next?</h4>
                  <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">1. Pay via PayPal</p>
                        <p className="text-xs text-blue-600">Quick and secure payment</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Mail className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">2. Get License Key</p>
                        <p className="text-xs text-blue-600">Check your email for license and setup guide</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">3. Start Using</p>
                        <p className="text-xs text-blue-600">Instant access to all premium features</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-blue-100">
                    <p className="text-xs text-blue-600">You'll be redirected back after payment. 24/7 support available if needed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer - Fixed at bottom */}
            <div className="sticky bottom-0 bg-white border-t p-4 space-y-3">
              <div className="text-center text-sm text-gray-600">
                <p>Redirecting to PayPal in {timeLeft}s</p>
                <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleRedirect}
                  className="w-full bg-[#0070ba] hover:bg-[#003087] text-white py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  Continue to PayPal
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium py-2"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
