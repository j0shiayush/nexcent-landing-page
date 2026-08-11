import Container from '../ui/Container';
import { LandingPageContent } from '@/types/landing';

type ClientsData = LandingPageContent['clients'];

interface ClientLogosProps {
  data: ClientsData;
}

export default function ClientLogosSection({ data }: ClientLogosProps) {
  return (
    <section className="py-12 bg-white" id="clients">
      <Container className="text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-secondary mb-2">
          {data.title}
        </h2>
        <p className="text-neutral-grey mb-10 text-base">
          {data.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24">
          {data.logos.map((logo) => (
            <img 
              key={logo.id}
              src={logo.logoUrl}
              alt={logo.name}
              className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>

      </Container>
    </section>
  );
}