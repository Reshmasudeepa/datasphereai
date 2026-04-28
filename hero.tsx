// @ts-nocheck
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { HomeFeatureSection } from '../components/home/HomeFeatureSection';
import { Stats } from '../components/home/Stats';
import {
  ProfileCompletionChecklistSection,
  PROFILE_CHECKLIST_ITEMS,
} from '../components/engagement';
import { CTASection } from '../components/home/CTASection';

// Local marketing assets for offer letters (root app keeps them under src/marketing/public)
import amazonOffer from '../public/offer-letters/amazon.png';
import googleOffer from '../public/offer-letters/google.png';
import ibmOffer from '../public/offer-letters/ibm.png';
import microsoftOffer from '../public/offer-letters/microsoft.png';
import tataOffer from '../public/offer-letters/tata.jpg';

const COMPANY_LOGOS = [
  { name: 'Google', domain: 'google.com' },
  { name: 'Microsoft', domain: 'microsoft.com' },
  { name: 'Amazon', domain: 'amazon.com' },
  { name: 'Apple', domain: 'apple.com' },
  { name: 'JPMorgan Chase', domain: 'jpmorganchase.com' },
  { name: 'Goldman Sachs', domain: 'goldmansachs.com' },
  { name: 'Tesla', domain: 'tesla.com' },
  { name: 'Nike', domain: 'nike.com' },
  { name: 'Deloitte', domain: 'deloitte.com' },
  { name: 'Meta', domain: 'meta.com' },
  { name: 'Oracle', domain: 'oracle.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
  { name: 'Accenture', domain: 'accenture.com' },
  { name: 'Walmart', domain: 'walmart.com' },
  { name: 'UPS', domain: 'ups.com' },
  { name: 'Verizon', domain: 'verizon.com' },
  { name: 'ExxonMobil', domain: 'exxonmobil.com' },
  { name: 'Cognizant', domain: 'cognizant.com' },
];

const TICKER_LOGOS = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

export function HomePage() {
  const offerLetters = [
    amazonOffer,
    googleOffer,
    ibmOffer,
    microsoftOffer,
    tataOffer,
  ];

  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveOfferIndex(prev => (prev + 1) % offerLetters.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, offerLetters.length]);

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <HomeFeatureSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <Stats />
      </motion.div>
      {/* Offer Letters Carousel Section */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mt-20 mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real Candidates. Real Offers. Real Proof.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Every slide represents a real candidate outcome with sensitive details professionally
              redacted and shared with permission.
            </p>
          </div>

          <div className="mt-4 md:mt-6">
            <div
              className="relative max-w-6xl mx-auto flex items-center justify-center"
              style={{ perspective: '1600px' }}
            >
              <div className="relative w-full max-w-xl sm:max-w-3xl md:max-w-4xl h-[480px] sm:h-[500px] md:h-[520px] flex items-center justify-center">
                {[-2, -1, 0, 1, 2].map(offset => {
                  const index =
                    (activeOfferIndex + offset + offerLetters.length) % offerLetters.length;
                  const src = offerLetters[index];

                  const isCenter = offset === 0;

                  const position =
                    offset === -2
                      ? {
                          translateX: '-380px',
                          scale: 0.8,
                          rotateY: '25deg',
                          opacity: 0.6,
                          zIndex: 2,
                        }
                      : offset === -1
                        ? {
                            translateX: '-220px',
                            scale: 0.9,
                            rotateY: '15deg',
                            opacity: 0.9,
                            zIndex: 4,
                          }
                        : offset === 1
                          ? {
                              translateX: '220px',
                              scale: 0.9,
                              rotateY: '-15deg',
                              opacity: 0.9,
                              zIndex: 4,
                            }
                          : offset === 2
                            ? {
                                translateX: '380px',
                                scale: 0.8,
                                rotateY: '-25deg',
                                opacity: 0.6,
                                zIndex: 2,
                              }
                            : {
                                translateX: '0px',
                                scale: 1,
                                rotateY: '0deg',
                                opacity: 1,
                                zIndex: 6,
                              };

                  return (
                    <div
                      key={`${src}-${offset}`}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translateX(${position.translateX}) scale(${position.scale}) rotateY(${position.rotateY})`,
                        transformStyle: 'preserve-3d',
                        opacity: position.opacity,
                        zIndex: position.zIndex,
                        width: '68%',
                        maxWidth: isCenter ? '360px' : '320px',
                        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                      {...(isCenter && {
                        onMouseEnter: () => setIsPaused(true),
                        onMouseLeave: () => setIsPaused(false),
                      })}
                    >
                      <div
                        className={`w-full rounded-[20px] bg-white border border-slate-100 overflow-hidden shadow-lg flex flex-col ${
                          isCenter ? 'shadow-2xl ring-1 ring-sky-100' : ''
                        }`}
                      >
                        <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">
                            Offer Letter Preview
                          </p>
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <div className="p-3 sm:p-4 bg-slate-900/5 flex items-center justify-center flex-1 min-h-[420px]">
                          <div className="w-full h-[420px] rounded-2xl bg-white flex items-center justify-center">
                            <img
                              src={src}
                              alt="Offer letter from top company"
                              className="max-w-full max-h-full w-full h-auto"
                              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {offerLetters.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveOfferIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeOfferIndex ? 'w-6 bg-blue-600' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to offer letter ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Candidates Are Now Working At
            </h2>
            <div className="mt-4 h-1 w-44 mx-auto rounded-full bg-gradient-to-r from-[#1B3A6B] via-[#1E8AC5] to-[#7DC447]" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 py-5 px-3 shadow-sm">
            <div className="ticker-track flex items-center gap-4 sm:gap-5 pr-4">
              {TICKER_LOGOS.map((company, idx) => (
                <div
                  key={`${company.name}-${idx}`}
                  className="w-[170px] h-[84px] flex items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.03]"
                >
                  <img
                    src={`https://logo.clearbit.com/${company.domain}`}
                    alt={`${company.name} logo`}
                    className="h-11 max-h-14 w-auto object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
          </div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileCompletionChecklistSection
          title="Why complete your profile?"
          subtitle="A complete profile helps us match you with the right opportunities and tools."
          items={PROFILE_CHECKLIST_ITEMS}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <CTASection />
      </motion.div>
    </div>
  );
}
