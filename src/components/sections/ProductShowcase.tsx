import { motion } from "framer-motion";
import { ProductImage } from "@/components/ui/product-image";

const features = [
  {
    title: "Modern Interface",
    description: "Intuitive design for maximum productivity",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=800&fit=crop"
  },
  {
    title: "Advanced Tools",
    description: "Professional-grade CAD features",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=400&fit=crop"
  },
  {
    title: "3D Modeling",
    description: "Create complex 3D designs easily",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop"
  },
  {
    title: "Collaboration",
    description: "Work seamlessly with your team",
    image: "https://images.unsplash.com/photo-1664575197229-3bbebc281874?w=600&h=400&fit=crop"
  },
  {
    title: "Project Management",
    description: "Track and manage your projects efficiently",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
  }
];

const ProductShowcase = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-4 rounded-xl overflow-hidden"
      >
        <ProductImage 
          src={features[0].image}
          alt="AutoCAD 2024 Interface"
          className="rounded-lg w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.slice(1).map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-card p-4 rounded-xl group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg">
              <ProductImage 
                src={feature.image}
                alt={feature.title}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
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