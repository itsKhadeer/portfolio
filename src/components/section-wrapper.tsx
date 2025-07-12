import { cn } from "@/lib/utils";
import AnimatedSection from "./animated-section";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, children, className }: SectionWrapperProps) => {
  return (
    <AnimatedSection as="section" id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">
            {title}
          </h2>
        </div>
        <div className="section-content">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SectionWrapper;
