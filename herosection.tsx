// @ts-nocheck
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';

const ILLUSTRATION_IMG =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="order-2 flex flex-col text-center lg:order-1 lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 self-center rounded-full border border-brand-secondary-200 bg-brand-surface px-4 py-2 shadow-sm lg:self-start">
              <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-sm font-medium text-brand-primary">
                AI-Powered Career Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Accelerate your Career with AI-Powered Job Search
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Transform your job search with personalized recommendations,
              intelligent resume optimization, and AI-driven interview
              preparation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-center lg:justify-start">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all hover:bg-brand-primary/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-brand-primary/50 hover:bg-gray-50"
              >
                <Play className="h-4 w-4 fill-brand-primary text-brand-primary" />
                Explore Platform
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-secondary-100 shadow-sm">
                    <span className="text-xs font-medium text-brand-primary">+</span>
                  </div>
                </div>
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-brand-primary">10,000+</span>{' '}
                  professionals
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9</span>
                <span className="text-sm text-gray-500">rating</span>
              </div>
            </div>
          </div>

          {/* Right: Illustration with decorative elements */}
          <div className="relative order-1 flex flex-shrink-0 justify-center lg:order-2">
            {/* Soft rounded container (light blue background) */}
            <div className="relative w-full max-w-[420px] rounded-3xl bg-brand-secondary-100/80 p-6 shadow-xl shadow-brand-primary/10 md:max-w-[480px] md:p-8">
              {/* Main illustration image */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                <img
                  src={ILLUSTRATION_IMG}
                  alt="Professionals in a meeting with laptop"
                  className="h-auto w-full object-cover"
                  width={480}
                  height={320}
                  loading="eager"
                />
              </div>

              {/* Floating decorative elements */}
              <div
                className="absolute -left-2 top-8 h-10 w-10 rounded-lg bg-brand-primary shadow-md md:left-4 md:top-12 md:h-12 md:w-12"
                aria-hidden
              />
              <div
                className="absolute -right-1 top-12 h-6 w-6 rounded-full bg-emerald-400 shadow-md md:right-6 md:top-16 md:h-8 md:w-8"
                aria-hidden
              />
              <div
                className="absolute right-4 top-6 h-5 w-5 rounded-full bg-violet-400 shadow-md md:right-12 md:top-10"
                aria-hidden
              />
              <div
                className="absolute bottom-20 left-2 h-8 w-8 rounded-lg bg-brand-secondary-200/90 shadow-md md:bottom-24 md:left-6 md:h-10 md:w-10"
                aria-hidden
              />
              <div
                className="absolute bottom-16 right-6 h-8 w-8 rounded-lg bg-amber-400/90 shadow-md md:bottom-20 md:right-10 md:h-10 md:w-10"
                aria-hidden
              />

              {/* Interview readiness card */}
              <div className="absolute left-4 top-4 rounded-xl border border-white/80 bg-white/95 px-3 py-2 shadow-lg md:left-6 md:top-6 md:px-4 md:py-2.5">
                <p className="text-xs font-semibold text-gray-800 md:text-sm">
                  Interview readiness
                </p>
                <p className="text-xs font-bold text-emerald-600 md:text-sm">-20%</p>
              </div>

              {/* Pills: MI, LA, RS */}
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2 md:right-6">
                <span className="rounded-lg bg-brand-primary/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
                  MI
                </span>
                <span className="rounded-lg bg-emerald-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
                  LA
                </span>
                <span className="rounded-lg bg-violet-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
                  RS
                </span>
              </div>

              {/* Small plant / accent at bottom-right */}
              <div
                className="absolute bottom-4 right-4 h-12 w-12 rounded-2xl bg-emerald-100 md:bottom-6 md:right-6 md:h-14 md:w-14"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
