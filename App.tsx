import React, { useState } from 'react';
import { Instagram, MapPin, CheckCircle2, ChevronRight, ArrowDown, Play } from 'lucide-react';
import { EXPERT_DATA, HERO_IMAGE, GALLERY_IMAGES, FEATURES, VIDEO_TESTIMONIALS } from './constants';
import Button from './components/Button';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: '', alt: '' });
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightboxState({ ...lightboxState, isOpen: false });
  };

  return (
    <div className="min-h-screen font-sans">
      <Lightbox 
        isOpen={lightboxState.isOpen} 
        imageSrc={lightboxState.src} 
        altText={lightboxState.alt} 
        onClose={closeLightbox} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex flex-col justify-end pb-12 lg:pb-0 lg:justify-center overflow-hidden bg-brand-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Misael Souza" 
            className="w-full h-full object-cover object-top opacity-60 lg:opacity-100 lg:w-1/2 lg:ml-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent lg:bg-gradient-to-r lg:from-brand-black lg:via-brand-black lg:to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 lg:flex lg:items-center lg:h-full">
          <div className="lg:w-1/2 pt-20 lg:pt-0">
            <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-sm font-semibold tracking-wider mb-6 animate-fade-in-up">
              MARKETING PARA CLÍNICAS DE ESTÉTICA
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] mb-6 animate-fade-in-up delay-100">
              Faço sua clínica faturar até <span className="text-brand-gold italic">30x mais</span> sem gastar 1 centavo com anúncios.
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed animate-fade-in-up delay-200">
              Uso a base de dados que você já tem para gerar caixa imediato. Estratégia 100% orgânica validada.
            </p>
            
            <div className="flex flex-col gap-3 animate-fade-in-up delay-300">
              <Button fullWidth={true} className="md:w-auto" text="Agendar uma reunião sem compromisso" />
              <p className="text-center md:text-left text-xs text-gray-500 uppercase tracking-widest pl-2">
                Chame no whatssap para saber mais
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden lg:block">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* --- QUEM SOU EU --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/10 translate-x-4 translate-y-4 rounded-lg"></div>
                <img 
                  src={HERO_IMAGE} 
                  alt="Misael Souza Perfil" 
                  className="relative rounded-lg shadow-xl w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
                Muito prazer, eu sou <span className="text-brand-gold">Misael Souza</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Não sou uma agência que vai queimar seu dinheiro com testes. Eu sou o especialista que entra no seu negócio para destravar o potencial de lucro que está escondido na sua própria base de clientes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Meu trabalho é direto: fazer clínicas de estética faturarem alto usando estratégias orgânicas e criar sites digitais premium para doutores em início de carreira.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Foco total em ROI (Retorno sobre Investimento)",
                  "Estratégias validadas no orgânico",
                  "Sites de alta conversão"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-brand-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTADOS REAIS (VÍDEOS E GALERIA) --- */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">Resultados que Falam</h2>
            <p className="text-gray-500">
              Contra fatos não há argumentos. Veja o impacto que geramos nos nossos parceiros.
            </p>
          </div>

          {/* Vídeos Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Depoimentos em Vídeo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {VIDEO_TESTIMONIALS.map((video) => (
                <div key={video.id} className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
                  {playingVideo === video.id ? (
                    <video 
                      src={video.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover"
                    >
                      Seu navegador não suporta vídeos.
                    </video>
                  ) : (
                    <div 
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img 
                        src={video.thumbnailUrl} 
                        alt={video.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-black mb-4 shadow-lg transform group-hover:scale-110 transition-transform">
                          <Play fill="currentColor" className="ml-1" />
                        </div>
                        <div className="text-center px-4">
                          <h4 className="text-white font-bold text-xl">{video.name}</h4>
                          <p className="text-brand-gold font-bold">{video.result}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Galeria Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((img) => (
              <div 
                key={img.id} 
                className="break-inside-avoid relative group cursor-zoom-in rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(img.url, img.alt)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-8 italic">
            *Resultados podem variar de acordo com o comprometimento e cenário de cada clínica.
          </p>
        </div>
      </section>

      {/* --- POR QUE CONFIAR (FEATURES) --- */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Por que confiar no meu método?</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA INTERMEDIÁRIO --- */}
      <section className="py-16 bg-brand-gold/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-6">
            Pare de deixar dinheiro na mesa. Sua base de clientes vale ouro.
          </h3>
          <div className="flex justify-center">
            <Button text="Quero destravar meu faturamento" />
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">Como funciona a Primeira Consulta</h2>
            <p className="text-gray-500 mt-4">Simples, direto e sem burocracia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

            {[
              { num: "01", title: "Toque no Botão", desc: "Você clica no botão do WhatsApp e fala diretamente comigo." },
              { num: "02", title: "Breve Conversa", desc: "Entendo o momento atual da sua clínica ou carreira." },
              { num: "03", title: "Plano de Ação", desc: "Te mostro onde estão as oportunidades de lucro imediato." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-white">
                <div className="w-24 h-24 bg-brand-gray rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="font-serif text-3xl font-bold text-brand-gold">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
              100% Gratuito e Sem Compromisso
            </span>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Pronta para elevar o nível da sua clínica?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Não espere seus concorrentes descobrirem esse método antes de você. A agenda para consultorias gratuitas é limitada.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button text="CLIQUE AQUI PARA SABER MAIS" className="animate-pulse hover:animate-none scale-110" />
            <p className="text-sm text-gray-500 mt-4">
              Atendimento direto pelo WhatsApp • Resposta rápida
            </p>
          </div>
        </div>
      </section>

      {/* --- RODAPÉ --- */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-bold mb-1">{EXPERT_DATA.name}</h3>
              <p className="text-sm mb-2">{EXPERT_DATA.role}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs">
                <MapPin size={14} />
                <span>{EXPERT_DATA.location}</span>
              </div>
            </div>

            <a 
              href={EXPERT_DATA.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-brand-gold transition-colors"
            >
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </div>
              <span className="text-sm font-medium">@elevatemarketing.ofc</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center md:flex md:justify-between items-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Elevate Marketing. Todos os direitos reservados.
            </p>
            <p className="font-serif text-2xl text-white/20 mt-4 md:mt-0 select-none">
              Misael Souza
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;