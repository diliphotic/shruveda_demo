import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  message?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message = 'Rooted in Ayurvedic Tradition · Complimentary Express Delivery Across India',
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#15583F] text-[#F7F5ED] text-xs py-2 px-4 relative z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B89A60] shrink-0" />
          <span className="font-medium tracking-wide">{message}</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-[#DCE5D7] hover:text-white transition-colors p-1 -mr-1 rounded-full focus:outline-none focus:ring-1 focus:ring-[#B89A60]"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
