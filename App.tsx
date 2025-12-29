import React, { useState } from 'react';
import { Instagram, MapPin, CheckCircle2, ChevronRight, ArrowDown, Play, Image as ImageIcon, Star } from 'lucide-react';
import { EXPERT_DATA, HERO_IMAGE, GALLERY_IMAGES, FEATURES, VIDEO_TESTIMONIALS } from './constants';
import Button from './components/Button';
import Lightbox from './components/Lightbox';
import VideoCard from './components/VideoCard';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';

type ViewState = 'quiz' | 'result' | 'main';

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<ViewState>('quiz');

  // Main App State
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: '', alt: '' });
  const [activeTab, setActiveTab] = useState<'video' | 'gallery'>('video');

  const openLightbox = (src: string, alt: string) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightboxState({ ...lightboxState, isOpen: false });
  };

  // --- NAVIGATION LOGIC ---
  if (currentView === 'quiz') {
    return <Quiz onComplete={() => setCurrentView('result')} />;
  }

  if (currentView === 'result') {
    return <QuizResult onContinue={() => setCurrentView('main')} />;
  }

  // --- MAIN LANDING PAGE (MOBILE FIRST OPTIMIZED) ---
  return (
    <div className="min-h-screen font-sans animate-in fade-in duration-700 bg-brand-gray">
      <Lightbox 
        isOpen={lightboxState.isOpen} 
        imageSrc={lightboxState.src} 
        altText={lightboxState.alt} 
        onClose={closeLightbox} 
      />

      {/* --- HERO SECTION COMPACTA --- */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex flex-col justify-end pb-8 md:justify-center overflow-hidden bg-brand-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Misael Souza" 
            className="w-full h-full object-cover object-top opacity-60 lg:opacity-100 lg:w-1/2 lg:ml-auto"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent lg:bg-gradient-to-r lg:from-brand-black lg:via-brand-black lg:to-transparent"></div>
        </div>

        <div className="container mx-auto px-5 relative z-10 lg:flex lg:items-center lg:h-full">
          <div className="lg:w-1/2 pt-16 lg:pt-0">
            <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                Vagas Abertas para Consultoria
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-6xl leading-[1.1] mb-4 animate-fade-in-up delay-100 font-bold">
              Fature <span className="text-brand-gold italic">30x mais</span> sem gastar 1 centavo com anúncios.
            </h1>
            
            <p className="text-gray-300 text-sm md:text-lg mb-6 max-w-md leading-relaxed animate-fade-in-up delay-200">
              Estratégia orgânica validada para clínicas e sites premium para quem está começando.
            </p>
            
            <div className="flex flex-col gap-3 animate-fade-in-up delay-300">
              <Button fullWidth={true} className="md:w-auto py-3 text-base shadow-brand-gold/20" text="AGENDAR CONSULTA GRÁTIS" />
              <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <span>Estratégia Validada</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <span>100% Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUEM SOU EU (COMPACTO) --- */}
      <section className="py-10 bg-white rounded-t-3xl -mt-6 relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 md:w-full md:max-w-xs shrink-0 rounded-full md:rounded-lg overflow-hidden border-2 border-brand-gold shadow-lg mb-2 md:mb-0">
               <img 
                  src={HERO_IMAGE} 
                  alt="Misael Souza" 
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-4xl text-brand-dark mb-2">
                Eu sou <span className="text-brand-gold">Misael Souza</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Especialista em destravar o lucro escondido na sua base de clientes e criar posicionamento digital de alta autoridade.
              </p>
              
              <div className="bg-brand-gray p-3 rounded-lg flex justify-between gap-2 text-xs font-semibold text-brand-dark">
                 <div className="text-center flex-1 border-r border-gray-300">
                    <span className="block text-brand-gold text-lg font-bold">30x</span>
                    Mais Faturamento
                 </div>
                 <div className="text-center flex-1 border-r border-gray-300">
                    <span className="block text-brand-gold text-lg font-bold">100%</span>
                    Orgânico
                 </div>
                 <div className="text-center flex-1">
                    <span className="block text-brand-gold text-lg font-bold">Top</span>
                    Sites
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTADOS (TABS OTIMIZADAS) --- */}
      <section className="py-10 bg-brand-gray">
        <div className="container mx-auto px-5">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl text-brand-dark font-bold">Resultados Reais</h2>
          </div>

          {/* TABS COMPACTAS */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-full shadow-sm inline-flex items-center gap-1 w-full max-w-xs">
              <button
                onClick={() => setActiveTab('video')}
                className={`
                  flex-1 flex items-center justify-center gap-1 py-2 rounded-full text-xs font-bold transition-all duration-300
                  ${activeTab === 'video' 
                    ? 'bg-brand-black text-white shadow-md' 
                    : 'bg-transparent text-gray-500'}
                `}
              >
                <Play className="w-3 h-3" />
                Vídeos
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`
                  flex-1 flex items-center justify-center gap-1 py-2 rounded-full text-xs font-bold transition-all duration-300
                  ${activeTab === 'gallery' 
                    ? 'bg-brand-black text-white shadow-md' 
                    : 'bg-transparent text-gray-500'}
                `}
              >
                <ImageIcon className="w-3 h-3" />
                Galeria
              </button>
            </div>
          </div>

          {/* TAB CONTENT */}
          <div className="min-h-[300px]">
            {activeTab === 'video' && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                {VIDEO_TESTIMONIALS.length > 0 ? (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   {VIDEO_TESTIMONIALS.map((video) => (
                     <VideoCard 
                       key={video.id}
                       videoUrl={video.videoUrl}
                       thumbnailUrl={video.thumbnailUrl}
                       name={video.name}
                       result={video.result}
                     />
                   ))}
                 </div>
                ) : (
                  <div className="text-center py-10 text-gray-500 text-sm">
                    Vídeos sendo carregados...
                  </div>
                )}
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-in fade-in zoom-in-95 duration-300">
                {GALLERY_IMAGES.map((img) => (
                  <div 
                    key={img.id} 
                    className="relative rounded-lg overflow-hidden shadow-sm aspect-square"
                    onClick={() => openLightbox(img.url, img.alt)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- DIFERENCIAIS (GRID COMPACTO MOBILE) --- */}
      <section className="py-10 bg-brand-black text-white">
        <div className="container mx-auto px-5">
          <h2 className="font-serif text-2xl mb-6 text-center">Por que confiar?</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-brand-dark p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-brand-gold mb-2">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 16 })}
                </div>
                <h3 className="text-xs font-bold mb-1 text-white">{feature.title}</h3>
                <p className="text-[10px] text-gray-400 leading-tight hidden md:block">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA (LISTA COMPACTA) --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="font-serif text-2xl text-brand-dark mb-6 text-center">Passo a Passo</h2>

          <div className="space-y-3 max-w-lg mx-auto">
            {[
              { num: "01", title: "Toque no Botão", desc: "Fale direto comigo no WhatsApp." },
              { num: "02", title: "Breve Conversa", desc: "Alinhamos seu objetivo e cenário." },
              { num: "03", title: "Plano de Ação", desc: "Estratégia para lucro imediato." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center bg-brand-gray p-3 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-brand-black text-brand-gold rounded-full flex items-center justify-center font-bold font-serif shrink-0 mr-4 shadow-md">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-12 bg-brand-black text-white relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/20 blur-[60px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-5 text-center relative z-10">
          <h2 className="font-serif text-2xl md:text-4xl mb-4">
            A oportunidade é agora.
          </h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Não deixe sua concorrência sair na frente. Sua clínica e sua marca merecem esse upgrade.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button text="FALAR NO WHATSAPP AGORA" className="w-full py-4 text-sm font-bold animate-pulse hover:animate-none" />
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                <span className="ml-1">Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- RODAPÉ SIMPLIFICADO --- */}
      <footer className="bg-brand-dark text-gray-500 py-8 border-t border-white/5 text-center">
        <div className="container mx-auto px-5">
            <h3 className="text-white text-base font-bold mb-1">{EXPERT_DATA.name}</h3>
            <p className="text-xs mb-4">{EXPERT_DATA.role}</p>
            
            <a 
              href={EXPERT_DATA.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-full mb-6 text-xs hover:bg-white/10"
            >
              <Instagram size={14} />
              <span>@elevatemarketing.ofc</span>
            </a>

            <p className="text-[10px]">
              &copy; {new Date().getFullYear()} Elevate Marketing.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;