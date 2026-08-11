import { Users, Handshake, MousePointerClick, CreditCard } from 'lucide-react';
import Container from '../ui/Container';
import { LandingPageContent } from '@/types/landing';

type StatsData = LandingPageContent['stats'];

interface StatsSectionProps {
  data: StatsData;
}

const StatIcon = ({ name }: { name: string }) => {
  const baseClass = "w-8 h-8 text-brand-primary";
  switch (name) {
    case 'Users': return <Users className={baseClass} />;
    case 'Handshake': return <Handshake className={baseClass} />;
    case 'Touchpad': return <MousePointerClick className={baseClass} />;
    case 'CreditCard': return <CreditCard className={baseClass} />;
    default: return <Users className={baseClass} />;
  }
};

export default function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className="py-16 bg-neutral-silver">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-secondary leading-snug">
            {data.titlePrefix} <br />
            <span className="text-brand-primary">{data.titleHighlight}</span>
          </h2>
          <p className="text-neutral-black">
            {data.subtitle}
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8 md:gap-10 w-full">
          {data.items.map((stat) => (
            <div key={stat.id} className="flex items-center gap-4">
              <StatIcon name={stat.iconName} />
              <div>
                <h3 className="text-2xl font-bold text-brand-secondary leading-none mb-1">
                  {stat.number}
                </h3>
                <p className="text-neutral-grey text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}