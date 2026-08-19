import { SIGNIN_REGISTER_URL } from '../config/signinUrl';
import { motion } from 'framer-motion';

import aboutCodapticsIllustration from '../public/about-codaptics-illustration.png';
import whatWeDoIllustration from '../public/what-we-do-illustration.png';
import whyCodapticsIllustration from '../public/why-codaptics-illustration.png';
import howWeWorkIllustration from '../public/how-we-work-illustration.png';

type AboutHighlight = {
  title: string;
  description: string;
  sectionBg: string;
  imageSrc: string;
  imageAlt: string;
  alignRight: boolean;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const COLLAGE_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    alt: 'Team collaboration and hiring',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
    alt: 'Professional recruiter at work',
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    alt: 'Career growth and success',
  },
];

const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    title: 'AI-Powered Matching',
    description:
      'Our algorithms scan thousands of profiles and live job postings to deliver exact-fit candidates in hours-not weeks. Every match is deliberate and data-validated.',
    sectionBg: 'bg-white',
    imageSrc: aboutCodapticsIllustration,
    imageAlt: 'AI-powered matching illustration',
    alignRight: false,
  },
  {
    title: 'Human-Led Every Step',
    description:
      'A dedicated Codaptics recruiter guides every candidate from profile submission through to signed offer-zero ghosting. We place candidates in full-time roles AND contract positions.',
    sectionBg: 'bg-[#EEF6FF]',
    imageSrc: whatWeDoIllustration,
    imageAlt: 'Human recruiter support illustration',
    alignRight: true,
  },
  {
    title: 'All Domains Covered',
    description:
      'IT, Engineering, Healthcare, Finance, Manufacturing, Networking & more. Full-time AND contract roles-we cover every path. Multi-domain expertise means we speak your industry language.',
    sectionBg: 'bg-white',
    imageSrc: howWeWorkIllustration,
    imageAlt: 'Multi-domain career placement illustration',
    alignRight: false,
  },
  {
    title: 'Why Codaptics',
    description:
      "We place candidates in roles aligned with their goals and skills. We don't just match resumes-we engineer careers. Real recruiter relationships combined with AI precision equals faster offers and better fit.",
    sectionBg: 'bg-[#EEF6FF]',
    imageSrc: whyCodapticsIllustration,
    imageAlt: 'Why choose Codaptics illustration',
    alignRight: true,
  },
];

const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    title: 'AI-Powered Matching',
    description:
      'Our algorithms scan thousands of profiles and live job postings to deliver exact-fit candidates in hours-not weeks. Every match is deliberate and data-validated.',
    sectionBg: 'bg-white',
    imageSrc: aboutCodapticsIllustration,
    imageAlt: 'AI-powered matching illustration',
    alignRight: false,
  },
  {
    title: 'Human-Led Every Step',
    description:
      'A dedicated Codaptics recruiter guides every candidate from profile submission through to signed offer-zero ghosting. We place candidates in full-time roles AND contract positions.',
    sectionBg: 'bg-[#EEF6FF]',
    imageSrc: whatWeDoIllustration,
    imageAlt: 'Human recruiter support illustration',
    alignRight: true,
  },
  {
    title: 'All Domains Covered',
    description:
      'IT, Engineering, Healthcare, Finance, Manufacturing, Networking & more. Full-time AND contract roles-we cover every path. Multi-domain expertise means we speak your industry language.',
    sectionBg: 'bg-white',
    imageSrc: howWeWorkIllustration,
    imageAlt: 'Multi-domain career placement illustration',
    alignRight: false,
  },
  {
    title: 'Why Codaptics',
    description:
      "We place candidates in roles aligned with their goals and skills. We don't just match resumes-we engineer careers. Real recruiter relationships combined with AI precision equals faster offers and better fit.",
    sectionBg: 'bg-[#EEF6FF]',
    imageSrc: whyCodapticsIllustration,
    imageAlt: 'Why choose Codaptics illustration',
    alignRight: true,
  },
];

export function AboutPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Top section: Hero intro */}
<<<<<<< HEAD
        <section className="pt-[calc(4rem+78px)] sm:pt-[calc(4.5rem+86px)] lg:pt-[calc(6rem+94px)] pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1B3A6B] via-[#1B3A6B] to-white">
=======
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1B3A6B] via-[#1B3A6B] to-white">
>>>>>>> 4f05fc1 (09-07)
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Right: short content */}
              <motion.div className="order-1 lg:order-2" variants={itemVariants}>
                <p className="text-sm font-medium text-[#7DC447] mb-3 uppercase tracking-wide">About Codaptics</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  AI Intelligence + Human Expertise = Careers Redefined
                </h1>
                <p className="text-lg text-gray-100 leading-relaxed max-w-xl">
                  Codaptics is a next-generation career placement company that harnesses the precision of AI and the judgment of experienced human recruiters to connect outstanding talent with the right opportunities—across Technology, Engineering, Healthcare, Finance, Manufacturing, and beyond.
                </p>
              </motion.div>

              {/* Left: image collage with overlapping rounded images */}
              <motion.div
                className="relative order-2 lg:order-1 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-0 w-[72%] sm:w-[70%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-0 border-4 border-white">
                  <img
                    src={COLLAGE_IMAGES[0].src}
                    alt={COLLAGE_IMAGES[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-[52%] sm:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img
                    src={COLLAGE_IMAGES[1].src}
                    alt={COLLAGE_IMAGES[1].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute right-2 sm:right-4 top-0 w-[40%] sm:w-[38%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                  <img
                    src={COLLAGE_IMAGES[2].src}
                    alt={COLLAGE_IMAGES[2].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {ABOUT_HIGHLIGHTS.map((item) => {
          return (
            <section
              key={item.title}
              className={`py-8 lg:py-10 px-4 sm:px-6 lg:px-8 ${item.sectionBg}`}
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  className={`flex ${item.alignRight ? 'justify-end' : 'justify-start'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={containerVariants}
                >
                  <motion.div
                    className="w-full max-w-3xl"
                    variants={itemVariants}
                  >
                    <div className="bg-white rounded-2xl border border-[#D8E6F8] shadow-[0_10px_30px_rgba(27,58,107,0.08)] p-5 sm:p-6">
                      <div className="flex items-start gap-4 sm:gap-5">
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0"
                        />
                        <div>
                          <h2 className="text-2xl font-bold text-[#1B3A6B] mb-2">{item.title}</h2>
                          <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Closing Tagline */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1B3A6B] to-[#1E8AC5]">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Redefine Your Career?
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              Start your journey with Codaptics today. Book a free 20-minute Career Clarity Session with a domain expert—no commitment, just clarity.
            </p>
            <a
              href={SIGNIN_REGISTER_URL}
              className="inline-flex items-center justify-center rounded-lg bg-[#7DC447] text-[#1B3A6B] px-8 py-4 text-lg font-bold shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              Apply Now - Start Your Journey
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

