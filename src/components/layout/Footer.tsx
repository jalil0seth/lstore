import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/buttons/CtaButton";
import { FooterContent } from "./FooterContent";

export const Footer = () => {
  const scrollToForm = () => {
    const form = document.querySelector('[data-checkout-form]');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-16 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 py-8">
        <FooterContent className="pb-24 md:pb-8" />
      </div>

      {/* Fixed CTA Button - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-gray-900/80 backdrop-blur-sm border-t border-gray-800 z-50">
        <div className="container mx-auto flex justify-center">
          <CtaButton 
            onClick={scrollToForm}
            className="w-full max-w-md shadow-xl bg-gradient-to-r from-primary to-primary-dark"
          >
            Get The Offer Now
          </CtaButton>
        </div>
      </div>
    </motion.footer>
  );
};