import React from 'react';

export interface ExpertProfile {
  name: string;
  role: string;
  location: string;
  whatsappLink: string;
  instagramLink: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: 'result' | 'social';
}

export interface VideoTestimonial {
  id: number;
  name: string;
  result: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}