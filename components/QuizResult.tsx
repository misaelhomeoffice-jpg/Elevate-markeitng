import React from 'react';
import { EXPERT_DATA, HERO_IMAGE } from '../constants';
import { CheckCircle2, CalendarCheck } from 'lucide-react';

interface QuizResultProps {
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col font-sans overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 blur-[80px] rounded-full"></div>

      <div className="container mx-auto px-6 py-8 flex-1 flex flex-col items-center justify-center relative z-10">
        
        {/* Status Badge */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 fill-green-500/20" />
            <span className="font-bold tracking-wide text-sm uppercase">Perfil Compatível</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-serif text-center mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Esse método de faturamento é ideal para você
        </h1>
        
        <p className="text-gray-400 text-center mb-8 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Sua análise foi concluída com sucesso.
        </p>

        {/* Hero Card */}
        <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-square mb-8 rounded-2xl overflow-hidden border border-brand-gold/30 shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] animate-in zoom-in-95 duration-1000 delay-300">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10"></div>
          <img 
            src={HERO_IMAGE} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-center">
             <div className="inline-block px-3 py-1 bg-brand-gold text-brand-black font-bold text-xs rounded mb-2">
                APROVADO
             </div>
             <p className="text-white text-lg leading-relaxed font-serif">
                "Com base nas suas respostas, o Método de faturamento da Elevate Marketing consegue entregar exatamente um faturamento ideal e 100% organico"
             </p>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <button 
            onClick={onContinue}
            className="group relative w-full overflow-hidden bg-brand-gold text-brand-black font-bold text-lg py-5 px-8 rounded-xl shadow-xl shadow-brand-gold/20 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <div className="flex items-center justify-center gap-3">
              <span>VER DETALHES E AGENDAR</span>
              <CalendarCheck className="w-6 h-6" />
            </div>
          </button>
          
          <p className="text-center text-gray-500 text-xs mt-4">
            Acesso liberado ao portfólio e agenda oficial
          </p>
        </div>

      </div>
    </div>
  );
};

export default QuizResult;