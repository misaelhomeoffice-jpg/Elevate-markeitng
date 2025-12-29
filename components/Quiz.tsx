import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
      "Fazer um faturamento rápido sem gastar com anúncio ou um site profissional"
    ]
  },
  {
    question: "Você gostaria de ter um Site Profissional Premium por um preço acessível?",
    options: [
      "Sim, preciso passar mais autoridade",
      "Tenho interesse, mas acho sites muito caros",
      "Não, foco apenas no Instagram",
      "Já tenho um site que funciona"
    ]
  },
  {
    question: "Qual seu nível de comprometimento com o sucesso do seu negócio?",
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
    <div className="min-h-screen bg-brand-gray flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">
            <span>Análise de Perfil</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-gold transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div 
          className={`
            bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 transform
            ${isExiting ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0 animate-in fade-in slide-in-from-right-8'}
          `}
        >
          <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold rounded-full mb-4">
            PERGUNTA {currentQuestion + 1} DE {QUESTIONS.length}
          </span>
          
          <h2 className="text-2xl font-serif text-brand-dark font-bold mb-8 leading-tight">
            {QUESTIONS[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {QUESTIONS[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={handleOptionClick}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-200 group flex items-center justify-between"
              >
                <span className="text-gray-700 font-medium group-hover:text-brand-dark">{option}</span>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-gold transition-colors" />
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3 h-3" />
          Ambiente seguro e confidencial
        </p>
      </div>
    </div>
  );
};

export default Quiz;