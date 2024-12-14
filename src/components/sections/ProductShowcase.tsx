import { motion } from "framer-motion";
import { ProductImage } from "@/components/ui/product-image";
import { heroData } from "../hero/hero.ts";
import { useState } from "react";

const ProductShowcase = () => {
  const [data] = useState(heroData);

  if (!data.productFeatures?.length) return null;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-2 rounded-xl overflow-hidden"
      >
        <ProductImage 
          src={data.productFeatures[0].image}
          alt={data.productFeatures[0].title}
          className="rounded-lg w-full hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {data.productFeatures.slice(1).map((feature, index) => (
          <motion.div
            key={`product-feature-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-card p-2 rounded-xl group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg">
              <ProductImage 
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <h4 className="text-white font-medium">{feature.title}</h4>
                  <p className="text-gray-200 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;