import React, { useRef, useState } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface VideoCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  name: string;
  result: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, thumbnailUrl, name, result }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    if (!videoUrl) {
      alert("O link do vídeo ainda não foi configurado no arquivo constants.tsx");
      return;
    }
    
    try {
      setIsLoading(true);
      // Attempt to play the video
      await videoRef.current.play();
      // If successful, state updates will be handled by onPlay event, 
      // but we set isPlaying here just in case to ensure UI responsiveness
      setIsPlaying(true);
    } catch (err) {
      console.error("Erro ao reproduzir vídeo:", err);
      // Ensure loading state is cleared if playback fails
      setIsLoading(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 pointer-events-none">
          <Loader2 className="w-10 h-10 text-brand-gold animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnailUrl}
        className="w-full h-full object-cover bg-black"
        controls={isPlaying}
        playsInline
        preload="none"
        onPause={() => setIsPlaying(false)}
        onPlay={() => {
          setIsPlaying(true);
          setIsLoading(false);
        }}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onEnded={handleVideoEnd}
      >
        Seu navegador não suporta vídeos.
      </video>

      {/* Custom Overlay - Visible only when not playing */}
      <div 
        className={`absolute inset-0 cursor-pointer bg-black/30 hover:bg-black/40 transition-all duration-300 z-10 flex flex-col items-center justify-center ${isPlaying || isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={handlePlay}
        role="button"
        aria-label={`Reproduzir depoimento de ${name}`}
      >
        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-black mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <Play fill="currentColor" className="ml-1 w-6 h-6" />
        </div>
        <div className="text-center px-4">
          <h4 className="text-white font-bold text-xl drop-shadow-md">{name}</h4>
          <p className="text-brand-gold font-bold drop-shadow-md">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;