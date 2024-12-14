import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Container = ({ children, className, ...props }: ContainerProps) => (
  <div className={cn("container-base", className)} {...props}>
    {children}
  </div>
)