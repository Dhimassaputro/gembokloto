import { Container } from "./Container";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
