

import { cn } from '../../utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, className, centered = false }: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12', centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl', className)}>
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-nk-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-nk-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
