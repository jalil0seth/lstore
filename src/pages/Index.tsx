import { motion, AnimatePresence } from "framer-motion";
import { Building, Shield, Award, Clock } from "lucide-react";
import PayPalCheckout from "@/components/PayPalCheckout";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { Footer } from "@/components/layout/Footer";
import { useHeroStore } from "@/components/hero/hero.ts";

const iconComponents = {
  Building,
  Shield,
  Award,
  Clock
};

const Index = () => {
  const { heroData, isLoading, error } = useHeroStore();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error || !heroData) {
    return <div className="flex items-center justify-center min-h-screen">Error loading data</div>;
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
        <div className="container mx-auto px-4 py-8 space-y-12">
          <HeroSection />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Mobile PayPal Checkout - Only visible on mobile */}
            <div className="lg:hidden">
              <PayPalCheckout />
            </div>

            {/* Left Column - Product Info */}
            <div className="space-y-8">
              <ProductShowcase />
              <BenefitsSection />
              <TestimonialsSection />
            </div>

            {/* Right Column - PayPal Checkout (Desktop) */}
            <div className="hidden lg:block lg:sticky lg:top-8">
              <PayPalCheckout />
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center"
          >
            {heroData.trustIndicators.features.map((feature) => {
              const Icon = iconComponents[feature.icon as keyof typeof iconComponents];
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-200 shadow-lg p-4 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-gray-800">{feature.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;