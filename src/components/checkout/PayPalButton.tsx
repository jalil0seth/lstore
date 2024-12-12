export const PayPalButton = () => {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center gap-2 bg-[#0070ba] hover:bg-[#003087] text-white py-4 px-6 rounded-lg font-medium transition-colors"
    >
      <img 
        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" 
        alt="PayPal" 
        className="h-5" 
      />
      Checkout Securely
    </button>
  );
};