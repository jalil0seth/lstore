import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Architect",
    company: "Design Masters Inc.",
    content: "AutoCAD 2024 has revolutionized our workflow. The new features are incredible! The templates alone saved us countless hours of work. The support team is always responsive and helpful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    highlight: "50% faster project completion"
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    company: "BuildTech Solutions",
    content: "Best investment for our team. The lifetime license is a game-changer. The collaboration features have made remote work seamless. Highly recommend to any professional team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    highlight: "ROI in just 2 weeks"
  },
  {
    name: "David Rodriguez",
    role: "Lead Engineer",
    company: "Innovative Designs Co.",
    content: "The 3D modeling capabilities are unmatched. We've been able to take on more complex projects with confidence. The learning curve was minimal thanks to the excellent documentation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    highlight: "Increased productivity by 40%"
  },
  {
    name: "Emily Zhang",
    role: "Design Director",
    company: "Future Architects Ltd.",
    content: "The precision and reliability of AutoCAD 2024 are outstanding. The new interface is intuitive and the rendering speed is remarkable. It's become an essential tool in our design process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    highlight: "Exceptional quality"
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
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
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