import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { HeaderData } from '@/types/landing';

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          {/* A pure CSS placeholder for the logo icon until you add the SVG */}
          <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45" />
          </div>
          <span className="text-2xl font-bold text-brand-secondary">
            {data.logoText}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {data.navItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className="text-base font-medium text-neutral-black hover:text-brand-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">{data.actions.loginText}</Button>
          <Button variant="primary">{data.actions.signupText}</Button>
        </div>
      </Container>
    </header>
  );
}