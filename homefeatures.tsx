// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, FileText, MessageSquare } from 'lucide-react';
import { LazyImage } from '../ui/LazyImage';

const FEATURES = [
  {
    title: 'Daily Job Updates',
    description:
      'Personalized job recommendations based on your role, domain, and preferences. Never miss the right opportunity.',
    link: '/solutions/daily-job-updates',
    icon: Bell,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
  },
  {
    title: 'ATS Resume',
    description:
      'Create ATS-optimized resumes aligned with real job requirements. Get noticed by recruiters.',
    link: '/solutions/ats-resume',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
  },
  {
    title: 'AI Mock Interviews',
    description:
      'Practice with AI-driven feedback in a realistic hiring environment. Build confidence and clarity.',
    link: '/solutions/ai-mock-interview',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80',
  },
];

function FeatureCard({
  feature,
  className = '',
  fullWidth = false,
  isVisible = true,
  delay = 0,
}: {
  feature: (typeof FEATURES)[0];
  className?: string;
  fullWidth?: boolean;
  isVisible?: boolean;
  delay?: number;
}) {
  const Icon = feature.icon;
  return (
    <Link
      to={feature.link}
      className={`group flex flex-col rounded-xl border border-brand-secondary-100 bg-brand-surface shadow-md shadow-brand-primary/5 overflow-hidden transition-all duration-500 ease-out hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${fullWidth ? 'w-full' : 'flex-shrink-0 w-[340px] snap-center'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-brand-neutral-100 overflow-hidden">
        <LazyImage
          src={feature.image}
          alt={feature.title}
          width={340}
          height={192}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-secondary-50 transition-colors group-hover:bg-brand-primary/10">
          <Icon className="h-6 w-6 text-brand-primary" />
        </div>
        <h3 className="text-lg font-semibold text-brand-primary group-hover:text-brand-primary transition-colors">
          {feature.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{feature.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-primary group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="h-4 w-4 shrink-0" />
        </span>
      </div>
    </Link>
  );
}

export function HomeFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-16 md:pt-10 md:pb-20 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-12 text-center md:mb-14 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <p className="inline-block px-4 py-2 rounded-full bg-brand-secondary-50 text-brand-primary text-sm font-semibold mb-4">
              How It Works
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl md:text-5xl">
              From Resume to Offer Letter - Here Is Exactly How We Get You Hired
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
              We follow a transparent, step-by-step process that keeps candidates informed and
              empowered at every stage. No black boxes, no silence, no surprises.
            </p>
          </div>

          {/* Desktop: horizontal auto-scroll marquee */}
          <div className="hidden lg:block overflow-hidden w-full" aria-label="Feature cards">
            <div
              className="flex gap-6 home-feature-marquee-track"
              style={{
                width: 'max-content',
                animation: 'homeFeatureMarquee 60s linear infinite',
              }}
            >
              {/* First set of cards */}
              <div className="flex gap-6 shrink-0">
                {FEATURES.map((feature, i) => (
                  <FeatureCard
                    key={`a-${feature.title}`}
                    feature={feature}
                    isVisible={isInView}
                    delay={200 + i * 100}
                  />
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 shrink-0">
                {FEATURES.map((feature, i) => (
                  <FeatureCard
                    key={`b-${feature.title}`}
                    feature={feature}
                    isVisible={isInView}
                    delay={200 + i * 100}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / tablet: static grid with scroll reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
            {FEATURES.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                fullWidth
                isVisible={isInView}
                delay={200 + i * 80}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .home-feature-marquee-track {
          will-change: transform;
        }
        .home-feature-marquee-track:hover,
        .home-feature-marquee-track:focus-within {
          animation-play-state: paused !important;
        }
        @keyframes homeFeatureMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
      `}</style>
    </section>
  );
}
