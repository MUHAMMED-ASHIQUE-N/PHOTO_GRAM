import {  type FC } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { useUserAuth } from '../../../context/userAuthContext';
import { useNavigate } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PixelVault
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#gallery" className="text-slate-300 hover:text-white transition-colors">Gallery</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
          {user ? (
            <button onClick={() => logOut()} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate('/login')} className="px-6 py-2 ml-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Login
            </button>
          )}
        </div>
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-md border-t border-slate-700">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#gallery" className="block text-slate-300 hover:text-white transition-colors">Gallery</a>
            <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
            {user ? (
              <button onClick={() => logOut()} className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium">
                Logout
              </button>
            ) : (
              <button onClick={() => navigate('/login')} className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium mt-2">
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 