export const PriceDisplay = () => {
  return (
    <div className="text-center space-y-1">
      <div className="text-2xl font-bold">$599</div>
      <div className="text-sm text-gray-400 line-through">Regular Price: $1,199</div>
      <div className="text-primary font-semibold">Save 50% Today!</div>
    </div>
  );
};