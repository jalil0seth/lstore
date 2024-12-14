import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Grid = ({ children, className, ...props }: GridProps) => (
  <div className={cn("grid-layout", className)} {...props}>
    {children}
  </div>
)