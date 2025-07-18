import {  type FC } from 'react';
import { Upload, Zap, Share2, Shield, Heart, Camera } from 'lucide-react';

const features = [
  {
    icon: <Upload className="w-8 h-8" />,
    title: 'Smart Upload',
    description: 'Drag and drop multiple photos with automatic organization by date, location, and content.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI Organization',
    description: 'Let AI automatically tag and categorize your photos for effortless searching.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Easy Sharing',
    description: 'Create beautiful galleries and share them with friends, family, or clients instantly.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Storage',
    description: 'Your photos are encrypted and backed up with military-grade security.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Social Features',
    description: 'Like, comment, and collaborate on photos with your community.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Pro Tools',
    description: 'Advanced editing tools and filters to make your photos shine.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const FeaturesSection: FC = () => (
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
        {features.map((feature, idx) => (
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
);

export default FeaturesSection; 