import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { heroData } from "../hero/hero.ts";
import { useState } from "react";

const TestimonialsSection = () => {
  const data = heroData;
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center text-default">
        {data.testimonial.heading}
      </h3>
      
      <div className="space-y-4">
        {data.testimonial.data.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-card p-6 rounded-xl relative"
          >
            <Quote className="absolute top-4 right-4 text-lighter" size={40} />
            
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
                <p className="text-light mb-3">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-muted">{testimonial.name}</p>
                    <p className="text-sm text-lighter">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <Badge variant="success" className="badge badge-success">
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