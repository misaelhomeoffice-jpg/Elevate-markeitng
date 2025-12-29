import React from 'react';
import { EXPERT_DATA, HERO_IMAGE } from '../constants';
import { CheckCircle2, CalendarCheck, Star } from 'lucide-react';

interface QuizResultProps {
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ onContinue }) => {
  return (
    <div className="h-[100dvh] w-full bg-brand-black text-white flex flex-col font-sans overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-brand-gold/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Container - Full Height Flex */}
      <div className="flex-1 flex flex-col p-4 relative z-10 h-full">
        
        {/* HEADER SECTION - Compact & Punchy */}
        <div className="flex flex-col items-center text-center space-y-2 mb-3 shrink-0">
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(74,222,128,0.1)]">
              <CheckCircle2 className="w-3.5 h-3.5 fill-green-500/20" />
              <span className="font-bold tracking-widest text-[10px] uppercase">Perfil Compatível</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-serif text-white font-medium leading-tight animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
            Você é a candidata ideal.
          </h1>
        </div>

        {/* IMAGE & CONTEXT SECTION - Takes available space */}
        <div className="flex-1 relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-4 min-h-0 animate-in zoom-in-95 duration-1000 delay-200 group">
          
          {/* Hero Image - Object Position Top to focus on chest/face */}
          <img 
            src={HERO_IMAGE} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Gradient Overlay - Darkens bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent"></div>

          {/* Text Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-center pb-6">
             <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />)}
             </div>
             <p className="text-white text-sm md:text-base leading-relaxed font-light drop-shadow-lg">
                "Com base nas suas respostas, o <span className="font-bold text-brand-gold">Método {EXPERT_DATA.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura."
             </p>
          </div>
        </div>

        {/* CTA SECTION - Fixed Bottom */}
        <div className="shrink-0 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 pb-2">
          <button 
            onClick={onContinue}
            className="group relative w-full overflow-hidden bg-brand-gold text-brand-black font-bold text-sm py-4 px-4 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-pulse hover:animate-none transition-all duration-300 border-t border-white/30 uppercase tracking-wide leading-tight"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative z-10 flex flex-col items-center">
              <span>VER DETALHES E AGENDAR</span>
              <span className="text-[10px] opacity-80 mt-0.5">UMA REUNIÃO SEM COMPROMISSO</span>
            </span>
          </button>
          
          <div className="flex justify-center items-center gap-2 mt-3 opacity-60">
             <CalendarCheck className="w-3 h-3 text-white" />
             <p className="text-[10px] text-white">Agenda oficial liberada por tempo limitado</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuizResult;