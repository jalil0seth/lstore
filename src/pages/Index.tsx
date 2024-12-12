import { motion, AnimatePresence } from "framer-motion";
import { Building, Shield, Award, Clock } from "lucide-react";
import FacebookBanner from "@/components/marketing/FacebookBanner";
import PayPalCheckout from "@/components/PayPalCheckout";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-8 space-y-12">
          <FacebookBanner />
          <HeroSection />

          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience the next generation of CAD software with AutoCAD 2024 Professional. 
              Packed with powerful features, intuitive tools, and advanced 3D modeling capabilities, 
              it's the perfect solution for architects, engineers, and designers. Our software 
              streamlines your workflow, enhances collaboration, and brings your creative vision to life.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Product Info */}
            <div className="space-y-8">
              <ProductShowcase />
              <BenefitsSection />
              <TestimonialsSection />
            </div>

            {/* Right Column - PayPal Checkout */}
            <div className="sticky top-8">
              <PayPalCheckout />
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
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
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">{label}</p>
                <p className="text-xs text-gray-400 mt-1">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;