import { Gift, Star } from "lucide-react";
import { heroData } from "../../components/hero/hero.ts";
import { useState, useEffect } from "react";

export const CheckoutHeader = () => {
  const [data, setData] = useState(heroData);

  return (
    <>
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-t-2xl p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-gray-800">{data.title}</span>
          </div>
          <div className="text-primary font-bold">{data.saveAmount}</div>
        </div>
      </div>

      <div className="text-center space-y-2 p-4">
        <div className="flex items-center justify-center gap-2 text-primary font-semibold">
          <Gift className="animate-pulse" />
          <span>{data.giftMessage}</span>
        </div>
        <div className="text-sm text-gray-600">
          {data.worth}
        </div>
      </div>
    </>
  );
};