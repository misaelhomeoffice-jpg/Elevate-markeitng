import React from 'react';
import { MessageCircle } from 'lucide-react';
import { EXPERT_DATA } from '../constants';

interface ButtonProps {
  text?: string;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar consulta gratuita no whatsapp", 
  className = "",
  fullWidth = false
}) => {
  return (
    <a 
      href={EXPERT_DATA.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg 
        transition-all duration-300 hover:bg-green-500 hover:shadow-green-500/30 hover:-translate-y-1
        flex items-center justify-center gap-3 text-lg
        ${fullWidth ? 'w-full' : 'w-auto inline-flex'}
        ${className}
      `}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      <MessageCircle className="w-6 h-6" />
      <span>{text}</span>
    </a>
  );
};

export default Button;