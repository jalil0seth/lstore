import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Architect",
    company: "Design Masters Inc.",
    content: "AutoCAD 2024 has revolutionized our workflow. The new features are incredible! The templates alone saved us countless hours.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    highlight: "50% faster project completion"
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    company: "BuildTech Solutions",
    content: "Best investment for our team. The lifetime license is a game-changer. Support team is incredibly responsive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    highlight: "ROI in just 2 weeks"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">
        Trusted by Industry Leaders
      </h3>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-card p-6 rounded-xl relative"
          >
            <Quote className="absolute top-4 right-4 text-primary/20" size={40} />
            
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 mb-3">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <Badge variant="success" className="bg-green-500/10 text-green-400 border-green-500/20">
                    {testimonial.highlight}
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Badge = ({ children, className, variant }: any) => (
  <div className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </div>
);

export default TestimonialsSection;