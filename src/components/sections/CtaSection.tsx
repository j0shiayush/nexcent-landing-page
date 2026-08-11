import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { LandingPageContent } from '@/types/landing';

type CtaData = LandingPageContent['cta'];

interface CtaSectionProps {
  data: CtaData;
}

export default function CtaSection({ data }: CtaSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white" id="product">
      <Container className="text-center max-w-3xl mx-auto flex flex-col items-center">
        
        <h2 className="text-4xl md:text-[54px] font-semibold text-brand-secondary leading-tight mb-8">
          {data.title}
        </h2>
        
        <Button variant="primary" className="flex items-center gap-2 px-8 py-3.5 text-base">
          {data.buttonText}
          <ArrowRight className="w-5 h-5" />
        </Button>
        
      </Container>
    </section>
  );
}