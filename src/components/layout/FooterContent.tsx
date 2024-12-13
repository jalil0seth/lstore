interface FooterContentProps {
  className?: string;
}

export const FooterContent = ({ className }: FooterContentProps) => {
  return (
    <div className={`text-sm text-gray-400 text-center space-y-4 ${className}`}>
      <p>
        © 2024 AutoCAD Professional. All rights reserved.
      </p>
      <p className="max-w-2xl mx-auto text-xs sm:text-sm">
        Disclaimer: This is a demonstration website. AutoCAD® is a registered trademark 
        of Autodesk, Inc. This website and the products offered are not affiliated with, 
        endorsed by, or sponsored by Autodesk, Inc. All product names, logos, and brands 
        are property of their respective owners.
      </p>
      <p className="text-xs">
        Prices and offers are subject to change. Not all features may be available in all regions.
        Please review the full terms and conditions before purchase.
      </p>
    </div>
  );
};