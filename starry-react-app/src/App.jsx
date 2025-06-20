import StarField from './components/StarField';
import GlassCard from './components/GlassCard';
import ProjectCard from './components/ProjectCard';
import ImageGallery from './components/ImageGallery';
import TestimonialCarousel from './components/TestimonialCarousel';
import ParallaxSection from './components/ParallaxSection';

function App() {
  const projects = [
    { title: 'Holy Bless', description: 'A Thai-inspired platform', image: 'https://via.placeholder.com/256x320' },
    { title: 'Siam Blessing', description: 'Cultural e-commerce', image: 'https://via.placeholder.com/256x320' },
  ];

  return (
    <div>
      <StarField />
      <GlassCard />
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 flex space-x-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <ImageGallery />
      <TestimonialCarousel />
      <ParallaxSection />
    </div>
  );
}

export default App;
