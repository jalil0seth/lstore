import { CtaButton } from "@/components/ui/buttons/CtaButton";

interface CheckoutFormProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const CheckoutForm = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  onSubmit
}: CheckoutFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg input-focus text-gray-800 placeholder-gray-500"
          placeholder="Full Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg input-focus text-gray-800 placeholder-gray-500"
          placeholder="Email for License Delivery"
        />
      </div>

    <div className="text-center space-y-1">
      <div className="text-3xl font-bold text-primary">$599</div>
      <div className="text-sm text-gray-400 line-through">Regular Price: $1,199</div>
      <div className="text-primary font-semibold">Save 50% Today!</div>
    </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#0070ba] hover:bg-[#003087] text-white py-4 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
      >
        <img 
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" 
          alt="PayPal" 
          className="h-5"
        />
        Checkout Securely
      </button>
    </form>
  );
};