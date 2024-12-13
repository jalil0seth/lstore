import { Gift, Star } from "lucide-react";

export const CheckoutHeader = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-t-2xl p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-gray-800">Limited Time Offer</span>
          </div>
          <div className="text-primary font-bold">Save 50%</div>
        </div>
      </div>

      <div className="text-center space-y-2 p-4">
        <div className="flex items-center justify-center gap-2 text-primary font-semibold">
          <Gift className="animate-pulse" />
          <span>Premium Templates Included</span>
        </div>
        <div className="text-sm text-gray-600">
          Worth $299 - Free with your purchase today!
        </div>
      </div>
    </>
  );
};