import React from 'react';
import { EXPERT_DATA, HERO_IMAGE } from '../constants';
import { CheckCircle2, CalendarCheck } from 'lucide-react';

interface QuizResultProps {
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ onContinue }) => {
  return (
    <div className="h-[100dvh] w-full bg-brand-black text-white flex flex-col font-sans overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col items-center px-5 py-4 relative z-10 h-full">
        
        {/* Top Section: Header (Fixo no topo) */}
        <div className="flex flex-col items-center text-center space-y-2 mt-2 shrink-0 z-20">
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 fill-green-500/20" />
              <span className="font-bold tracking-wide text-xs uppercase">Perfil Compatível</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-serif leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Método Ideal Encontrado
          </h1>
          
          <p className="text-gray-400 text-xs animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Sua análise foi concluída com sucesso.
          </p>
        </div>

        {/* Middle Group: Imagem + Botão (Centralizados juntos no espaço restante) */}
        <div className="flex-1 w-full flex flex-col items-center justify-center min-h-0 gap-3 pb-2">
          
          {/* Image Card - Altura ajustável para não empurrar o botão */}
          <div className="relative w-full max-w-xs shrink-1 min-h-0 aspect-[4/5] max-h-[50vh] rounded-2xl overflow-hidden border border-brand-gold/30 shadow-[0_0_30px_-5px_rgba(212,175,55,0.2)] animate-in zoom-in-95 duration-1000 delay-300">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10"></div>
            <img 
              src={HERO_IMAGE} 
              alt={EXPERT_DATA.name}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-center">
               <div className="inline-block px-2 py-0.5 bg-brand-gold text-brand-black font-bold text-[10px] rounded mb-2">
                  APROVADO
               </div>
               <p className="text-white text-sm leading-snug font-serif">
                  "O método Elevate Marketing entrega o faturamento orgânico ideal para o seu perfil."
               </p>
            </div>
          </div>

          {/* CTA - Logo abaixo da imagem */}
          <div className="w-full max-w-md shrink-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <button 
              onClick={onContinue}
              className="group relative w-full overflow-hidden bg-brand-gold text-brand-black font-bold text-lg py-4 px-6 rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.5)] animate-pulse hover:animate-none transition-all duration-300 border border-white/20"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <div className="flex items-center justify-center gap-2">
                <span>VER DETALHES E AGENDAR</span>
                <CalendarCheck className="w-5 h-5" />
              </div>
            </button>
            
            <p className="text-center text-gray-600 text-[10px] mt-2">
              Toque acima para acessar a agenda oficial
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuizResult;