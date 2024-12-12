import { Mail } from "lucide-react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const EmailInput = ({ value, onChange }: EmailInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
        <Mail className="w-4 h-4 text-primary" />
        Email for License Delivery
        <span className="text-primary">*</span>
      </label>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg input-focus text-white"
        placeholder="your@email.com"
        required
      />
    </div>
  );
};