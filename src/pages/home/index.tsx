import  { useState, type FC } from 'react';
import { Camera, Upload, Share2, Heart, Zap, Shield, Star, Play, Download, ArrowRight, Menu, X } from 'lucide-react';
import {  useUserAuth} from "../../context/userAuthContext";

const Home: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHover , setIsHover]= useState<number | null>(null)

  // Sample gallery images for showcase
  const showcaseImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop'
  ];

  const {logOut} = useUserAuth()

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  
  //     try {
  //       console.log("user Details",);
  //       await logOut()
  //       navigate("/login");
  //     } catch (error) {
  //            console.log( "Erorr: ",error);
  //            console.error(error);
             
  //     }
  //   };
  
    return (
         <div  className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#gallery" className="text-slate-300 hover:text-white transition-colors">Gallery</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <button onClick={()=>logOut()} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#gallery" className="block text-slate-300 hover:text-white transition-colors">Gallery</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

            {/* Dynamic Image Showcase */}
            <div className="relative">
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
                      onMouseEnter={()=> setIsHover(idx)}
                      onMouseLeave={()=> setIsHover(null)}
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
                
                {/* Floating UI Elements */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Photographers</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to organize, edit, and share your photos like a pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Smart Upload",
                description: "Drag and drop multiple photos with automatic organization by date, location, and content.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "AI Organization",
                description: "Let AI automatically tag and categorize your photos for effortless searching.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Easy Sharing",
                description: "Create beautiful galleries and share them with friends, family, or clients instantly.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Storage",
                description: "Your photos are encrypted and backed up with military-grade security.",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Social Features",
                description: "Like, comment, and collaborate on photos with your community.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Pro Tools",
                description: "Advanced editing tools and filters to make your photos shine.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-slate-700 rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Photo Experience?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of photographers who have already revolutionized their workflow with PixelVault.
            </p>
            <button className="group px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-slate-500 mt-4">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
    );
};

export default Home;

















// import React from 'react';

// interface IHomeProps {}

// const Home: React.FC<IHomeProps> = () => {
//     return (
//         <div>
//             HOME
//         </div>
//     );
// };

// export default Home;