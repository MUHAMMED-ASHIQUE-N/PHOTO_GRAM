import {  type FC } from 'react';
import { Heart, Share2 } from 'lucide-react';

interface ShowcaseGalleryProps {
  showcaseImages: string[];
  isHover: number | null;
  setIsHover: (idx: number | null) => void;
}

const ShowcaseGallery: FC<ShowcaseGalleryProps> = ({ showcaseImages, isHover, setIsHover }) => (
  <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
    <div className="grid grid-cols-3 gap-2 h-full p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl">
      {showcaseImages.map((img, idx) => (
        <div
          key={idx}
          className={`relative rounded-xl overflow-hidden transition-all duration-1000 ${
            isHover === idx
              ? ' ring-2 ring-purple-500 scale-105 z-10'
              : 'opacity-70 hover:opacity-100 hover:col-span-2 hover:row-span-2 '
          }`}
        >
          <img
            onMouseEnter={() => setIsHover(idx)}
            onMouseLeave={() => setIsHover(null)}
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      ))}
    </div>
    <div className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700">
      <div className="flex items-center space-x-2">
        <Heart className="w-4 h-4 text-red-400" />
        <span className="text-sm">1.2K</span>
      </div>
    </div>
    <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700">
      <div className="flex items-center space-x-2">
        <Share2 className="w-4 h-4 text-blue-400" />
        <span className="text-sm">Share</span>
      </div>
    </div>
  </div>
);

export default ShowcaseGallery; 