import {  type FC } from 'react';
import { Camera } from 'lucide-react';

const Footer: FC = () => (
  <footer className="relative z-10 px-6 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PixelVault
          </span>
        </div>
        <div className="flex items-center space-x-6 text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <span>© 2025 PixelVault. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 