import { User } from "lucide-react";

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NameInput = ({ value, onChange }: NameInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
        <User className="w-4 h-4 text-primary" />
        Name or Company
        <span className="text-primary">*</span>
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg input-focus text-white"
        placeholder="Enter your name or company"
        required
      />
    </div>
  );
};