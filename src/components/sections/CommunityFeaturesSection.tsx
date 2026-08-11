import { Users, Building2, Handshake } from 'lucide-react';
import Container from '../ui/Container';
import { LandingPageContent } from '@/types/landing';

type CommunityData = LandingPageContent['community'];

interface CommunityFeaturesProps {
  data: CommunityData;
}

// Statically mapping string names from JSON to React Components
const IconMap = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Users': return <Users className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Handshake': return <Handshake className={className} />;
    default: return <Users className={className} />;
  }
};

export default function CommunityFeaturesSection({ data }: CommunityFeaturesProps) {
  return (
    <section className="py-12 md:py-20 bg-white" id="feature">
      <Container>
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-secondary mb-4 leading-tight">
            {data.title}
          </h2>
          <p className="text-neutral-grey text-base">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {data.features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white px-8 py-10 rounded-lg text-center flex flex-col items-center hover:shadow-lg transition-shadow border border-transparent hover:border-gray-50"
            >
              {/* Figma specific icon background styling (bottom right and top left curve) */}
              <div className="w-16 h-16 bg-brand-primary/10 rounded-tl-[18px] rounded-br-[18px] rounded-tr-md rounded-bl-md flex items-center justify-center mb-6 text-brand-primary">
                <IconMap name={feature.iconName} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-neutral-grey text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}