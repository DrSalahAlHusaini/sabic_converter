import React from 'react';
import { ArrowDownUp } from 'lucide-react';

interface ConvertButtonProps {
  onClick: () => void;
}

export const ConvertButton: React.FC<ConvertButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-6 py-2 mb-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  >
    <ArrowDownUp size={20} />
    <span>تحويل / Convert</span>
  </button>
);