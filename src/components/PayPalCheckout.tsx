import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Gift, CheckCircle2, Star } from "lucide-react";
import { toast } from "sonner";
import { CheckoutForm } from "./checkout/CheckoutForm";
import { CheckoutHeader } from "./checkout/CheckoutHeader";
import { SecurityFeatures } from "./checkout/SecurityFeatures";
import { PriceDisplay } from "./checkout/PriceDisplay";
import { OrderSummary } from "./checkout/OrderSummary";
import { heroData } from "./hero/hero";

interface OrderResponse {
  orderId: string;
  url: string;
}

const PayPalCheckout = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [orderData, setOrderData] = useState<OrderResponse | null>(null);

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('userCheckoutData');
    if (savedData) {
      const { fullName: savedName, companyName: savedCompany, email: savedEmail } = JSON.parse(savedData);
      setFullName(savedName || "");
      setCompanyName(savedCompany || "");
      setEmail(savedEmail || "");
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (fullName || companyName || email) {
      localStorage.setItem('userCheckoutData', JSON.stringify({ fullName, companyName, email }));
    }
  }, [fullName, companyName, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      toast.error("Please enter your name and email");
      return;
    }

    setLoading(true);
    
    try {
      const productId = window.location.pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean).pop();
      
      const response = await fetch('/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          companyName,
          email,
          productId
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data: OrderResponse = await response.json();
      setOrderData(data);
      setShowSummary(true);
      
      // Store order data in localStorage
      localStorage.setItem('lastOrder', JSON.stringify(data));
      
      toast.success("Order created successfully!");
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowSummary(false);
    if (orderData?.url) {
      window.location.href = orderData.url;
    }
  };

  const handleSkip = () => {
    setShowSummary(false);
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
        <div className="relative glass-card rounded-2xl border border-light shadow-xl">
          <CheckoutHeader />
          
          <div className="p-4 sm:p-6 space-y-6">
            <CheckoutForm
              fullName={fullName}
              companyName={companyName}
              email={email}
              onFullNameChange={setFullName}
              onCompanyNameChange={setCompanyName}
              onEmailChange={setEmail}
              onSubmit={handleSubmit}
              loading={loading}
            />
            <SecurityFeatures />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-muted">
        <p className="flex items-center justify-center gap-2">
          <Clock size={16} />
          Limited time offer - Secure it now!
        </p>
      </div>

      {/* Order Summary Modal */}
      {showSummary && (
        <OrderSummary
          fullName={fullName}
          companyName={companyName}
          email={email}
          onClose={handleClose}
          onSkip={handleSkip}
          orderId={orderData?.orderId}
          orderUrl={orderData?.url}
        />
      )}
    </motion.div>
  );
};

export default PayPalCheckout;