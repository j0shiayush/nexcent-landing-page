import HeroSection from '@/components/sections/HeroSection';
import ClientLogosSection from '@/components/sections/ClientLogosSection';
import CommunityFeaturesSection from '@/components/sections/CommunityFeaturesSection';
import SplitContentSection from '@/components/sections/SplitContentSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';

import pageData from '@/data/landingPageData.json';
import { LandingPageContent } from '@/types/landing';

const data = pageData as LandingPageContent;

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection data={data.hero.slides[0]} />
      <ClientLogosSection data={data.clients} />
      <CommunityFeaturesSection data={data.community} />
      
      {/* Reusing the same modular component for different content */}
      <SplitContentSection data={data.splitContent1} />
      <StatsSection data={data.stats} />
      <SplitContentSection data={data.splitContent2} />
      
      <TestimonialSection data={data.testimonial} />
      <BlogSection data={data.blog} />
      
      <CtaSection data={data.cta} />
    </div>
  );
}