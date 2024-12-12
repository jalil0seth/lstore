import { motion, AnimatePresence } from "framer-motion";
import { Building, Shield, Award, Clock } from "lucide-react";
import FacebookBanner from "@/components/marketing/FacebookBanner";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToCheckout = () => {
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground">
        <ThemeToggle />
        <div className="container mx-auto px-4 py-8 space-y-12">
          <FacebookBanner />
          <HeroSection />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Product Info */}
            <div className="space-y-8">
              <ProductShowcase />
              <BenefitsSection />
              <TestimonialsSection />
            </div>

            {/* Right Column - Checkout Form */}
            <div className="lg:sticky lg:top-8" id="checkout-form">
              <CheckoutForm />
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-center"
          >
            {[
              { icon: Building, label: "50,000+ Users", description: "Trusted worldwide" },
              { icon: Shield, label: "PayPal Protected", description: "100% secure payments" },
              { icon: Award, label: "Official License", description: "Genuine software" },
              { icon: Clock, label: "24/7 Support", description: "Always here to help" }
            ].map(({ icon: Icon, label, description }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="glass-card p-4 rounded-xl"
              >
                <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fixed Get Offer Button on Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={scrollToCheckout}
          >
            Get Special Offer Now
          </Button>
        </div>

        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;