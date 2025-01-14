import { CtaButton } from "@/components/ui/buttons/CtaButton";
import { heroData } from "../hero/hero.ts";
import { useState, useEffect } from "react";
import { Loader2, AlertCircle } from "lucide-react";

interface CheckoutFormProps {
  fullName: string;
  companyName: string;
  email: string;
  onFullNameChange: (value: string) => void;
  onCompanyNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
}

export const CheckoutForm = ({
  fullName,
  companyName,
  email,
  onFullNameChange,
  onCompanyNameChange,
  onEmailChange,
  onSubmit,
  loading = false
}: CheckoutFormProps) => {
  const [data] = useState(heroData);
  const [touched, setTouched] = useState({
    fullName: false,
    email: false
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: ""
  });

  // Validate fields
  useEffect(() => {
    const newErrors = {
      fullName: "",
      email: ""
    };

    if (touched.fullName) {
      if (!fullName) {
        newErrors.fullName = "Full name is required";
      } else if (fullName.length < 2) {
        newErrors.fullName = "Full name must be at least 2 characters";
      }
    }

    if (touched.email) {
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);
  }, [fullName, email, touched]);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true
    });

    // Check for errors
    if (!fullName || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    onSubmit(e);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <div className="relative">
            <input
              type="text"
              value={fullName}
              onChange={(e) => onFullNameChange(e.target.value)}
              onBlur={() => handleBlur('fullName')}
              className={`w-full px-4 py-3 bg-subtle border ${
                errors.fullName 
                  ? 'border-error focus-error' 
                  : 'border-subtle focus-primary'
              } rounded-lg ring-offset-2 focus:ring-2 focus:ring-opacity-50 transition-colors text-default placeholder-gray-500`}
              placeholder="Full Name *"
              disabled={loading}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName && touched.fullName && (
              <div className="absolute right-3 top-3 text-error">
                <AlertCircle size={20} />
              </div>
            )}
          </div>
          {errors.fullName && touched.fullName && (
            <p className="mt-1 text-sm text-error">{errors.fullName}</p>
          )}
        </div>

        <input
          type="text"
          value={companyName}
          onChange={(e) => onCompanyNameChange(e.target.value)}
          className="w-full px-4 py-3 bg-subtle border border-subtle rounded-lg focus-primary ring-offset-2 focus:ring-2 focus:ring-opacity-50 transition-colors text-default placeholder-gray-500"
          placeholder="Company Name (Optional)"
          disabled={loading}
        />

        <div>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 bg-subtle border ${
                errors.email 
                  ? 'border-error focus-error' 
                  : 'border-subtle focus-primary'
              } rounded-lg ring-offset-2 focus:ring-2 focus:ring-opacity-50 transition-colors text-default placeholder-gray-500`}
              placeholder="Email Address *"
              disabled={loading}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && touched.email && (
              <div className="absolute right-3 top-3 text-error">
                <AlertCircle size={20} />
              </div>
            )}
          </div>
          {errors.email && touched.email && (
            <p className="mt-1 text-sm text-error">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="text-center space-y-2">
        <div className="text-3xl font-bold text-primary">{data.pricing.currentPrice}</div>
        <div className="text-sm text-lighter line-through">Regular Price: {data.pricing.regularPrice}</div>
        <div className="text-sm font-medium text-success">{data.pricing.saveText}</div>
      </div>

      <button
        type="submit"
        className={`w-full flex items-center justify-center gap-2 ${
          Object.keys(errors).some(key => errors[key as keyof typeof errors]) && 
          Object.keys(touched).every(key => touched[key as keyof typeof touched])
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#0070ba] hover:bg-[#003087]'
        } text-white py-4 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed`}
        disabled={loading || (Object.keys(errors).some(key => errors[key as keyof typeof errors]) && 
          Object.keys(touched).every(key => touched[key as keyof typeof touched]))}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <div className="flex items-center gap-2 hover:brightness-0 hover:invert transition-all duration-200 ">
            <img 
              src="https://store.softsos.com/payment-logos/paypal.svg" 
              alt="PayPal" 
              className="h-5 brightness-0 invert"
            />
            Checkout Securely
          </div>
        )}
      </button>
    </form>
  );
};