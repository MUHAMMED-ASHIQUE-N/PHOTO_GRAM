import {  type FC } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: FC = () => (
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
);

export default CTASection; 