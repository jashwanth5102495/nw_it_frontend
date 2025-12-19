import { useRef } from 'react';
import { motion } from 'framer-motion';
// import RotatingBackgrounds from './backgrounds/RotatingBackgrounds';
import VariableProximity from './VariableProximity';
// import RotatingText from './RotatingText';
// import LightPillar from './LightPillar';
import { ShaderAnimation } from './ui/shader-lines';
import { ShimmeringText } from './animate-ui/primitives/texts/shimmering';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero-section" className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Shader Lines background */}
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 hero-overlay"></div>

      <div ref={containerRef} className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Main heading with Company Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <ShimmeringText
            text="Jasnav IT Solutions"
            wave={true}
            duration={2.5}
            className=""
          />
        </h1>

        {/* Subtitle with Variable Proximity */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          <VariableProximity
            label="Create a clear roadmap, track progress, and smoothly guide your project from idea to successful launch."
            fromFontVariationSettings="'wght' 300, 'opsz' 8"
            toFontVariationSettings="'wght' 600, 'opsz' 20"
            containerRef={containerRef as unknown as React.RefObject<HTMLElement>}
            radius={60}
            falloff="exponential"
            style={{ color: '#d1d5db' }}
          />
        </p>

        {/* Removed Trustpilot indicators */}
      </div>
    </section>
  );
};

export default Hero;