import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-16 border-t border-gray-800 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-400 text-center space-y-4">
          <p>
            © 2024 AutoCAD Professional. All rights reserved.
          </p>
          <p className="max-w-2xl mx-auto">
            Disclaimer: This is a demonstration website. AutoCAD® is a registered trademark 
            of Autodesk, Inc. This website and the products offered are not affiliated with, 
            endorsed by, or sponsored by Autodesk, Inc. All product names, logos, and brands 
            are property of their respective owners.
          </p>
          <p className="text-xs">
            Prices and offers are subject to change. Not all features may be available in all regions.
            Please review the full terms and conditions before purchase.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};