import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "glass" | "base"
}

export const Card = ({ 
  children, 
  className, 
  variant = "base",
  ...props 
}: CardProps) => (
  <div 
    className={cn(
      variant === "glass" ? "glass-card" : "card-base",
      "card-content",
      className
    )} 
    {...props}
  >
    {children}
  </div>
)