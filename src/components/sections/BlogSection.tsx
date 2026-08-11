import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import { LandingPageContent } from '@/types/landing';

type BlogData = LandingPageContent['blog'];

interface BlogSectionProps {
  data: BlogData;
}

export default function BlogSection({ data }: BlogSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <Container>
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-secondary">
            {data.title}
          </h2>
          <p className="text-neutral-grey text-base">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {data.posts.map((post) => (
            <div key={post.id} className="flex flex-col items-center">
              
              {/* Image Container */}
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full aspect-[4/3] object-cover rounded-lg border border-gray-100 shadow-sm"
              />
              
              {/* Overlapping Text Card (The -mt-16 pulls it up over the image) */}
              <div className="relative bg-white shadow-lg rounded-lg p-6 w-[90%] -mt-16 z-10 text-center border border-gray-50 flex flex-col justify-between min-h-[140px]">
                <h3 className="text-neutral-grey font-semibold text-lg leading-snug mb-4">
                  {post.title}
                </h3>
                <a 
                  href={post.linkHref} 
                  className="inline-flex items-center justify-center gap-2 text-brand-primary font-semibold hover:text-green-700 transition-colors mt-auto"
                >
                  {post.readMoreText}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}