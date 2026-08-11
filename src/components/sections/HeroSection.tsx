import Container from '../ui/Container';
import Button from '../ui/Button';
import { HeroSlide } from '@/types/landing';

interface HeroSectionProps {
  data: HeroSlide;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="bg-neutral-silver py-16 md:py-24" id="home">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 space-y-8 max-w-2xl">
          <h1 className="text-4xl md:text-[64px] font-semibold leading-[1.2] text-brand-secondary">
            {data.titlePrefix} <br />
            <span className="text-brand-primary">{data.titleHighlight}</span>
          </h1>
          <p className="text-neutral-grey text-base md:text-lg">
            {data.description}
          </p>
          <Button variant="primary" className="px-8 py-3.5 text-base">
            {data.buttonText}
          </Button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full">
          <img
            src={data.imageUrl}
            alt="Hero Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

      </Container>
    </section>
  );
}