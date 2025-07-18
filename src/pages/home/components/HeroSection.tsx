import {  type FC } from 'react';
import { Zap, Play, Download, Star } from 'lucide-react';

const HeroSection: FC = () => (
  <section className="relative z-10 px-6 py-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-slate-300">Now with AI-powered organization</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Your Photos,
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block">
                Beautifully
              </span>
              Organized
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Transform your photo collection into a stunning, searchable gallery. 
              Upload, organize, and share your memories with the world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Start Creating
            </button>
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-white font-semibold text-lg hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </button>
          </div>
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10M+</div>
              <div className="text-slate-400">Photos Stored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500K+</div>
              <div className="text-slate-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-slate-400">4.9 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 