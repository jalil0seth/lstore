import { Card } from "@/components/ui/card/Card"
import { Check } from "lucide-react"

interface BenefitCardProps {
  title: string
  description: string
}

export const BenefitCard = ({ title, description }: BenefitCardProps) => (
  <Card variant="glass" className="hover-lift">
    <div className="flex items-start gap-2">
      <Check className="text-primary w-4 h-4 mt-1 shrink-0" />
      <div>
        <h4 className="text-subtitle font-medium">{title}</h4>
        <p className="text-description">{description}</p>
      </div>
    </div>
  </Card>
)