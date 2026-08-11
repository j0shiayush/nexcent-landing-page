import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-green-600 px-6 py-2.5",
    secondary: "bg-neutral-silver text-brand-primary hover:bg-gray-200 px-6 py-2.5",
    ghost: "bg-transparent text-neutral-black hover:text-brand-primary px-4 py-2",
    outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-2.5",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}