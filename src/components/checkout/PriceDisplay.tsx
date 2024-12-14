import { heroData } from "../hero/hero.ts";
import { useState } from "react";

export const PriceDisplay = () => {
  const [data] = useState(heroData);

  return (
    <div className="text-center space-y-2">
      <div className="text-3xl font-bold text-primary">
        {data.pricing.currentPrice}
      </div>
      <div className="text-sm text-muted">
        Regular Price: {data.pricing.regularPrice}
      </div>
      <div className="text-sm font-medium text-success">
        {data.pricing.saveText}
      </div>
    </div>
  );
};
