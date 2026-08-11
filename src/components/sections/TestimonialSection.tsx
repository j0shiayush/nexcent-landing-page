import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import { LandingPageContent } from '@/types/landing';

type TestimonialData = LandingPageContent['testimonial'];

interface TestimonialSectionProps {
  data: TestimonialData;
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-neutral-silver" id="testimonial">
      <Container className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        
        {/* Left Column: Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img 
            src={data.imageUrl} 
            alt="Tesla Logo" 
            className="w-full max-w-xs md:max-w-[326px] aspect-square rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <p className="text-neutral-grey font-medium leading-relaxed text-base">
            "{data.quote}"
          </p>
          
          <div>
            <h4 className="text-brand-primary font-semibold text-lg">{data.authorName}</h4>
            <p className="text-neutral-grey text-sm">{data.authorRole}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4">
            {/* Map actual client logos */}
            <div className="flex items-center gap-4">
               {data.clientLogos.slice(0, 6).map((logo) => (
                <img 
                  key={logo.id} 
                  src={logo.logoUrl}
                  alt={logo.name}
                  className="w-10 h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
            
            <a href="#" className="flex items-center gap-2 text-brand-primary font-semibold hover:text-green-700 transition-colors ml-auto md:ml-0">
              {data.linkText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
}