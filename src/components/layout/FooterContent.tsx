import { heroData } from "../hero/hero.ts";

interface FooterContentProps {
  className?: string;
}

export const FooterContent = ({ className }: FooterContentProps) => {
  const { footer } = heroData;
  
  return (
    <div className={`text-sm text-lighter text-center space-y-4 ${className}`}>
      <p>
        {footer.copyright}
      </p>
      <p className="max-w-2xl mx-auto text-xs sm:text-sm">
        {footer.disclaimer}
      </p>
      <p className="text-xs">
        {footer.terms}
      </p>
    </div>
  );
};