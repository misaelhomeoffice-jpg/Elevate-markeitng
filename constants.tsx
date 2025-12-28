import React from 'react';
import { ExpertProfile, GalleryImage, FeatureItem, VideoTestimonial } from './types';
import { Target, TrendingUp, ShieldCheck, Users, Smartphone, BarChart } from 'lucide-react';

export const EXPERT_DATA: ExpertProfile = {
  name: "Misael Souza",
  role: "Estrategista de Marketing para Estética",
  location: "São Paulo - São Vicente",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5513978245122&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+a+consultoria+gratuita.&type=phone_number&app_absent=0&utm_source=ig",
  instagramLink: "https://www.instagram.com/elevatemarketing.ofc/?next=%2F"
};

export const HERO_IMAGE = "https://i.imgur.com/cLklV44.jpeg";

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    name: "Camila",
    result: "R$ 23 MIL em 1 dia",
    videoUrl: "", // ADICIONE O LINK DO VIDEO AQUI
    thumbnailUrl: "https://placehold.co/1080x1920/1a1a1a/d4af37?text=Camila+%0A+R$+23+MIL"
  },
  {
    id: 2,
    name: "William",
    result: "R$ 25 MIL com Grupo VIP",
    videoUrl: "", // ADICIONE O LINK DO VIDEO AQUI
    thumbnailUrl: "https://placehold.co/1080x1920/1a1a1a/d4af37?text=William+%0A+R$+25+MIL"
  },
  {
    id: 3,
    name: "Siara",
    result: "R$ 9 MIL (Iniciante)",
    videoUrl: "", // ADICIONE O LINK DO VIDEO AQUI
    thumbnailUrl: "https://placehold.co/1080x1920/1a1a1a/d4af37?text=Siara+%0A+R$+9+MIL"
  },
  {
    id: 4,
    name: "Jucilene",
    result: "R$ 6.100 em 1 dia",
    videoUrl: "", // ADICIONE O LINK DO VIDEO AQUI
    thumbnailUrl: "https://placehold.co/1080x1920/1a1a1a/d4af37?text=Jucilene+%0A+R$+6.1+MIL"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: "https://i.imgur.com/TbKeWpe.png", alt: "Resultado Antes e Depois 1", category: 'result' },
  { id: 2, url: "https://i.imgur.com/KALkmh2.png", alt: "Resultado Antes e Depois 2", category: 'result' },
  { id: 3, url: "https://i.imgur.com/YQUvXqA.png", alt: "Resultado Antes e Depois 3", category: 'result' },
  { id: 4, url: "https://i.imgur.com/c6Fk8Zl.png", alt: "Resultado Gráfico 1", category: 'result' },
  { id: 5, url: "https://i.imgur.com/ccdp7RU.png", alt: "Resultado Gráfico 2", category: 'result' },
  { id: 6, url: "https://i.imgur.com/LTW5voG.png", alt: "Resultado Whatsapp", category: 'result' },
  { id: 7, url: "https://i.imgur.com/RMplkkN.png", alt: "Prova Social 1", category: 'result' },
  { id: 8, url: "https://i.imgur.com/iYzHuko.png", alt: "Prova Social 2", category: 'result' },
  { id: 9, url: "https://i.imgur.com/21tSgFx.png", alt: "Prova Social 3", category: 'result' },
  { id: 10, url: "https://i.imgur.com/p1s8aCz.png", alt: "Prova Social 4", category: 'result' },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Estratégia Orgânica",
    description: "Sem gastar 1 centavo com tráfego pago. Usamos inteligência, não apenas dinheiro.",
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Ativação de Base",
    description: "Multiplico o faturamento usando clientes que você já tem e estão esquecidos.",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Foco em Resultado",
    description: "Clínicas parceiras faturam até 30x mais com o meu método validado.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Sites Acessíveis",
    description: "Desenvolvimento web premium para doutores em início de carreira.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Análise de Dados",
    description: "Decisões baseadas em números reais da sua clínica, sem 'achismos'.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Transparência Total",
    description: "Avaliação honesta do seu cenário atual. Eu jogo limpo com você.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];