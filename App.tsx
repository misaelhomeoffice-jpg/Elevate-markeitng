import React, { useState } from 'react';
import { Instagram, Play, Image as ImageIcon, Star, Check, Zap, Users, Layout, MapPin } from 'lucide-react';
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

  // --- MAIN LANDING PAGE (ULTRA COMPACT MOBILE) ---
  return (
    <div className="min-h-screen font-sans animate-in fade-in duration-700 bg-brand-gray pb-0">
      <Lightbox 
        isOpen={lightboxState.isOpen} 
        imageSrc={lightboxState.src} 
        altText={lightboxState.alt} 
        onClose={closeLightbox} 
      />

      {/* --- HERO SECTION ULTRA COMPACTA --- */}
      <section className="relative pt-20 pb-8 bg-brand-black text-white overflow-hidden rounded-b-[2rem] shadow-2xl z-10">
        {/* Background Image Darkened */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src={HERO_IMAGE} 
            alt="Background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
           {/* Badge Topo */}
           <div className="flex justify-center mb-3">
              <span className="bg-brand-gold/20 text-brand-gold border border-brand-gold/30 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Vagas Abertas
              </span>
           </div>

           {/* Headline Compacta */}
           <h1 className="text-center font-serif text-3xl md:text-5xl leading-tight font-bold mb-3">
             Fature <span className="text-brand-gold italic">30x mais</span> sem gastar com anúncios.
           </h1>

           <p className="text-center text-gray-300 text-xs md:text-sm mb-6 max-w-sm mx-auto leading-relaxed">
             Método orgânico validado para clínicas e sites premium acessíveis.
           </p>

           {/* CTA Principal */}
           <div className="mb-6">
              <Button fullWidth={true} className="py-3 text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse" text="Agendar uma reunião sem compromisso" />
           </div>

           {/* Mini Authority Bar (Integrada no Hero) */}
           <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between gap-2 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-gold overflow-hidden shrink-0">
                    <img src={HERO_IMAGE} alt="Misael" className="w-full h-full object-cover" />
                 </div>
                 <div className="leading-none">
                    <p className="text-white font-serif text-sm font-bold">Misael Souza</p>
                    <p className="text-[10px] text-gray-400">Estrategista Digital</p>
                 </div>
              </div>
              <div className="flex gap-1">
                 <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                 <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                 <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                 <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                 <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
              </div>
           </div>
        </div>
      </section>

      {/* --- STATS GRID (Aparece logo abaixo) --- */}
      <section className="px-4 -mt-4 relative z-20">
         <div className="grid grid-cols-3 gap-2">
            {[
               { val: "30x", label: "Faturamento" },
               { val: "100%", label: "Orgânico" },
               { val: "Top", label: "Sites" }
            ].map((stat, i) => (
               <div key={i} className="bg-white rounded-lg shadow-lg p-2 text-center border-b-2 border-brand-gold">
                  <span className="block text-brand-gold font-bold text-lg leading-none">{stat.val}</span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase">{stat.label}</span>
               </div>
            ))}
         </div>
      </section>

      {/* --- RESULTADOS (Compacto) --- */}
      <section className="pt-6 pb-4 px-4">
        <div className="flex items-center justify-between mb-4">
           <h2 className="font-serif text-lg text-brand-dark font-bold">Resultados Reais</h2>
           
           {/* Mini Tabs */}
           <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
              <button onClick={() => setActiveTab('video')} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-colors ${activeTab === 'video' ? 'bg-brand-black text-white' : 'text-gray-400'}`}>
                 Vídeos
              </button>
              <button onClick={() => setActiveTab('gallery')} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-colors ${activeTab === 'gallery' ? 'bg-brand-black text-white' : 'text-gray-400'}`}>
                 Prints
              </button>
           </div>
        </div>

        <div className="min-h-[200px]">
           {activeTab === 'video' && (
              <div className="grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95">
                 {VIDEO_TESTIMONIALS.slice(0, 4).map((video) => (
                    <VideoCard key={video.id} {...video} />
                 ))}
              </div>
           )}
           {activeTab === 'gallery' && (
              <div className="grid grid-cols-3 gap-1 animate-in fade-in zoom-in-95">
                 {GALLERY_IMAGES.slice(0, 6).map((img) => (
                    <div key={img.id} className="aspect-square rounded overflow-hidden" onClick={() => openLightbox(img.url, img.alt)}>
                       <img src={img.url} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                 ))}
              </div>
           )}
        </div>
      </section>

      {/* --- DIFERENCIAIS (Lista Horizontal / Grid Denso) --- */}
      <section className="px-4 py-4">
         <h2 className="font-serif text-lg text-brand-dark font-bold mb-3 text-center">O que você recebe</h2>
         <div className="grid grid-cols-2 gap-2 mb-8">
            {[
               { icon: <Zap size={14} />, title: "Zero Gastos", desc: "Sem tráfego pago" },
               { icon: <Layout size={14} />, title: "Site Premium", desc: "Design de ponta" },
               { icon: <Users size={14} />, title: "Base Ativa", desc: "Reativação clientes" },
               { icon: <Check size={14} />, title: "Validado", desc: "Método comprovado" }
            ].map((item, i) => (
               <div key={i} className="bg-white p-3 rounded-lg border border-gray-100 flex flex-col items-center text-center shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-1">
                     {item.icon}
                  </div>
                  <h3 className="text-xs font-bold text-brand-dark">{item.title}</h3>
                  <p className="text-[9px] text-gray-500">{item.desc}</p>
               </div>
            ))}
         </div>
         
         {/* CTA Final */}
         <div className="text-center mb-6">
            <Button fullWidth={true} className="py-4 text-sm font-bold shadow-lg" text="Agendar uma reunião sem compromisso" />
            <p className="text-[10px] text-gray-400 mt-3">Poucas vagas disponíveis para este mês.</p>
         </div>
      </section>

      {/* --- FOOTER & CONTACT INFO --- */}
      <footer className="bg-brand-black text-white py-10 px-6 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]">
         <div className="flex flex-col items-center text-center gap-6">
            
            <div className="w-12 h-1 bg-brand-gold/30 rounded-full mb-2"></div>

            {/* Instagram Link */}
            <a 
              href={EXPERT_DATA.instagramLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-brand-gold border border-brand-gold/30 px-6 py-3 rounded-2xl hover:bg-brand-gold/10 hover:scale-105 transition-all w-full justify-center max-w-xs"
            >
              <Instagram size={20} />
              <span className="font-bold tracking-wide">@elevatemarketing.ofc</span>
            </a>

            {/* Address / Location */}
            <div className="flex flex-col items-center gap-2 opacity-70">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                 <MapPin size={16} />
              </div>
              <div>
                 <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Localização</p>
                 <p className="text-sm font-medium text-white">{EXPERT_DATA.location}</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="w-full border-t border-white/5 pt-6 mt-2">
              <p className="text-[10px] text-gray-600">
                © {new Date().getFullYear()} {EXPERT_DATA.name}.<br/>Todos os direitos reservados.
              </p>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;