import Container from '../ui/Container';
import Button from '../ui/Button';
import { SplitContentData } from '@/types/landing';

interface SplitContentProps {
  data: SplitContentData;
}

export default function SplitContentSection({ data }: SplitContentProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <Container className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        <div className="flex-1 w-full flex justify-center md:justify-start">
          <img 
            src={data.imageUrl} 
            alt={data.title}
            className="w-full max-w-sm object-contain"
          />
        </div>
        
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-secondary leading-snug">
            {data.title}
          </h2>
          <p className="text-neutral-grey text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
          <Button variant="primary">{data.buttonText}</Button>
        </div>

      </Container>
    </section>
  );
}