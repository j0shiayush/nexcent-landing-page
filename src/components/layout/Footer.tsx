import Link from 'next/link';
import { Send } from 'lucide-react';
import Container from '../ui/Container';
import { FooterData } from '@/types/landing';

interface FooterProps {
  data: FooterData;
}

const SocialIcon = ({ name }: { name: string }) => {
  const baseClass = "w-5 h-5 fill-current";
  
  switch (name.toLowerCase()) {
    case 'instagram': 
      return (
        <svg viewBox="0 0 24 24" className={baseClass}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    case 'dribbble': 
      return (
        <svg viewBox="0 0 24 24" className={baseClass}>
          <path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm8.441 6.577c.883 1.455 1.401 3.167 1.453 5.006-.525-.11-2.585-.487-4.838-.135-.205-.515-.429-1.036-.67-1.549 2.508-1.127 3.864-2.736 4.055-3.322zM12 2.164c2.25 0 4.331.758 5.992 2.03-.174.551-1.42 2.083-3.832 3.13-1.298-2.285-2.753-4.32-2.92-4.545a9.78 9.78 0 01.76-.615zm-2.073.914c.187.245 1.625 2.279 2.898 4.549-3.411 1.002-6.726.974-7.234.966a9.839 9.839 0 014.336-5.515zm-5.617 7.02c.49-.005 3.999.043 7.603-1.02.224.475.434.958.627 1.449-4.225 1.258-8.136 1.085-8.544 1.064-.047-.487-.074-.984-.074-1.488 0-.522.032-1.035.088-1.537zm.972 6.134a9.794 9.794 0 01-1.031-4.21c.421.026 4.673.23 9.141-1.157.34.808.653 1.637.931 2.486-3.899 1.766-5.37 4.509-5.519 4.811-1.341-.75-2.518-1.76-3.522-2.93zm4.954 1.583c.12-.26 1.516-2.827 5.253-4.558.192.569.363 1.144.512 1.725a9.805 9.805 0 01-5.765 2.833zm7.042-4.202c-.147-.577-.315-1.143-.502-1.696 2.052-.303 3.966.073 4.453.189-.251 1.956-1.135 3.693-2.456 5.05-1.004-.84-2.284-2.146-1.495-3.543z"/>
        </svg>
      );
    case 'twitter': 
      return (
        <svg viewBox="0 0 24 24" className={baseClass}>
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      );
    case 'youtube': 
      return (
        <svg viewBox="0 0 24 24" className={baseClass}>
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    default: 
      return null;
  }
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-brand-secondary text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45" />
              </div>
              <span className="text-2xl font-bold">{data.companyName}</span>
            </Link>
            <p className="text-sm text-neutral-silver mb-8 max-w-xs">
              {data.copyrightText}
            </p>
            <div className="flex items-center gap-4">
              {data.socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                  aria-label={social.platform}
                >
                  <SocialIcon name={social.iconName} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {data.columns.map((col, idx) => (
            <div key={idx} className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-6">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-neutral-silver hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Form */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-lg font-semibold mb-6">{data.newsletter.title}</h3>
            <div className="relative max-w-xs">
              <input 
                type="email" 
                placeholder={data.newsletter.placeholder}
                className="w-full bg-white/20 border-none rounded-md py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-neutral-silver focus:ring-1 focus:ring-white outline-none"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-brand-primary transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}