

import { getWhatsAppLink, cn } from '../../utils';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message: string;
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const WhatsAppButton = ({
  message,
  text = 'WhatsApp Us',
  className,
  variant = 'primary',
  fullWidth = false
}: WhatsAppButtonProps) => {

  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors rounded-md px-6 py-3";

  const variants = {
    primary: "bg-nk-green text-white hover:bg-nk-green/90",
    secondary: "bg-nk-text-primary text-white hover:bg-nk-text-primary/90",
    outline: "border border-nk-green text-nk-green hover:bg-nk-green/5"
  };

  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseClasses,
        variants[variant],
        fullWidth ? "w-full" : "",
        className
      )}
    >
      <MessageCircle size={18} className="mr-2" />
      {text}
    </a>
  );
};
