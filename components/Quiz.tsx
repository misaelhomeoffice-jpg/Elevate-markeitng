import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { EXPERT_DATA, HERO_IMAGE } from '../constants';

interface QuizProps {
  onComplete: () => void;
}

const QUESTIONS = [
  {
    question: "Qual é o seu momento atual?",
    options: [
      "Já tenho uma clínica/consultório estabelecido",
      "Sou profissional autônoma (atendo sozinha)",
      "Estou começando agora na área",
      "Sou gestora/investidora"
    ]
  },
  {
    question: "Qual é o seu maior obstáculo hoje?",
    options: [
      "Agenda vazia ou instável",
      "Atraio muitos curiosos e poucos pagantes",
      "Não sei como faturar sem gastar com anúncios",
      "Faturamento estagnado há meses"
    ]
  },
  {
    question: "O que você busca alcançar nos próximos 30 dias?",
    options: [
      "Aumentar o faturamento em 5x ou mais",
      "Lotar a agenda com procedimentos High Ticket",
      "Ter previsibilidade de caixa",
      "Fazer um faturamento rápido sem gastar"
    ]
  },
  {
    question: "Gostaria de um Site Premium acessível?",
    options: [
      "Sim, preciso passar mais autoridade",
      "Tenho interesse, mas acho sites caros",
      "Não, foco apenas no Instagram",
      "Já tenho um site que funciona"
    ]
  },
  {
    question: "Qual seu nível de comprometimento?",
    options: [
      "Alto: Faço o que for preciso para crescer",
      "Médio: Quero crescer, mas tenho pouco tempo",
      "Baixo: Estou apenas pesquisando",
    ]
  }
];

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleOptionClick = () => {
    setIsExiting(true);
    
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setIsExiting(false);
      } else {
        onComplete();
      }
    }, 300); // Tempo da animação de saída
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* --- BACKGROUND LAYER (Sobreposição ao site) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Background" 
          className="w-full h-full object-cover grayscale opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"></div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
        
        {/* HERO IDENTITY HEADER */}
        <div className="flex items-center justify-center gap-3 mb-2 animate-in fade-in slide-in-from-top-4">
          <div className="w-10 h-10 rounded-full border-2 border-brand-gold overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <img src={HERO_IMAGE} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
             <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">Consultoria com</p>
             <p className="font-serif text-lg leading-none">{EXPERT_DATA.name}</p>
          </div>
        </div>

        {/* PROGRESS BAR (Ultra Compact) */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mb-1">
          <div 
            className="h-full bg-brand-gold transition-all duration-500 ease-out shadow-[0_0_10px_#d4af37]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* QUIZ CARD */}
        <div 
          className={`
            bg-white rounded-2xl shadow-2xl p-5 transition-all duration-300 transform border border-gray-100
            ${isExiting ? 'opacity-0 -translate-x-10 scale-95' : 'opacity-100 translate-x-0 scale-100 animate-in fade-in slide-in-from-right-8'}
          `}
        >
          {/* Header Card */}
          <div className="flex justify-between items-center mb-4">
            <span className="inline-block px-2 py-0.5 bg-brand-black text-white text-[10px] font-bold rounded uppercase tracking-wider">
              Etapa {currentQuestion + 1}/{QUESTIONS.length}
            </span>
            <Shield className="w-4 h-4 text-gray-300" />
          </div>
          
          {/* Question Title */}
          <h2 className="text-lg font-serif text-brand-dark font-bold mb-5 leading-tight min-h-[3.5rem]">
            {QUESTIONS[currentQuestion].question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-2">
            {QUESTIONS[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={handleOptionClick}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-brand-gold hover:bg-brand-gold/5 active:bg-brand-gold/10 transition-all duration-200 group flex items-center justify-between shadow-sm"
              >
                <span className="text-sm text-gray-700 font-medium group-hover:text-brand-dark leading-snug">{option}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-gold transition-colors shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-white/40 text-[10px] flex items-center justify-center gap-1.5 mt-2">
          <CheckCircle2 className="w-3 h-3" />
          Seus dados estão seguros e protegidos.
        </p>
      </div>
    </div>
  );
};

export default Quiz;