// @ts-nocheck
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    title: 'Daily Job Updates',
    description:
      'Receive real-time job alerts tailored to your profile and preferences. Never miss an opportunity.',
    link: '/services/daily-job-updates',
    illustrationKey: 'job',
  },
  {
    title: 'AI Resume Builder',
    description: 'Create ATS-friendly resumes with AI-powered suggestions and pro templates.',
    link: '/services/ai-resume-builder',
    illustrationKey: 'resume',
  },
  {
    title: 'AI Mock Interviews',
    description:
      'Practice interviews with AI-driven questions and get instant feedback to improve.',
    link: '/services/ai-mock-interview',
    illustrationKey: 'interview',
  },
  {
    title: 'Interview Preparation',
    description:
      'Prepare confidently with curated questions, tips, and expert guidance for success.',
    link: '/services/interview-prep',
    illustrationKey: 'prep',
  },
];

/** Reference-style flat illustrations: stylized person (light orange head, blue body) + context */
function FeatureIllustration({ type }: { type: string }) {
  const w = 140;
  const h = 100;
  const common = {
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  switch (type) {
    case 'job':
      return (
        <svg {...common} className="mx-auto block">
          {/* Person: orange head, blue torso/legs */}
          <ellipse cx="70" cy="78" rx="14" ry="8" fill="#93c5fd" />
          <rect x="56" y="52" width="28" height="28" rx="4" fill="#3b82f6" />
          <circle cx="70" cy="38" r="16" fill="#fed7aa" />
          {/* Phone */}
          <rect x="88" y="42" width="28" height="48" rx="4" fill="#374151" />
          <rect x="92" y="46" width="20" height="24" rx="2" fill="#1f2937" />
          {/* Notification bubble */}
          <rect x="78" y="28" width="44" height="32" rx="6" fill="#3b82f6" />
          <text x="88" y="44" fill="white" fontSize="6" fontWeight="600">
            New Job Match
          </text>
          <text x="88" y="52" fill="white" fontSize="5">
            Software Engineer
          </text>
          <circle cx="114" y="30" r="6" fill="white" />
          <text x="112" y="33" fill="#3b82f6" fontSize="6" fontWeight="700">
            3
          </text>
          {/* Star */}
          <path
            d="M52 82l1.2 2.4 2.6.4-1.9 1.8.4 2.6-2.3-1.2-2.3 1.2.4-2.6-1.9-1.8 2.6-.4L52 82z"
            fill="#93c5fd"
          />
        </svg>
      );
    case 'resume':
      return (
        <svg {...common} className="mx-auto block">
          <ellipse cx="70" cy="78" rx="14" ry="8" fill="#93c5fd" />
          <rect x="56" y="52" width="28" height="28" rx="4" fill="#3b82f6" />
          <circle cx="70" cy="38" r="16" fill="#fed7aa" />
          {/* Resume document */}
          <rect
            x="82"
            y="32"
            width="40"
            height="52"
            rx="6"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1.5"
          />
          <line
            x1="90"
            y1="46"
            x2="114"
            y2="46"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="90"
            y1="54"
            x2="118"
            y2="54"
            stroke="#93c5fd"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="90"
            y1="62"
            x2="116"
            y2="62"
            stroke="#93c5fd"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="90"
            y1="70"
            x2="112"
            y2="70"
            stroke="#93c5fd"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M52 82l1.2 2.4 2.6.4-1.9 1.8.4 2.6-2.3-1.2-2.3 1.2.4-2.6-1.9-1.8 2.6-.4L52 82z"
            fill="#93c5fd"
          />
        </svg>
      );
    case 'interview':
      return (
        <svg {...common} className="mx-auto block">
          <ellipse cx="70" cy="78" rx="14" ry="8" fill="#93c5fd" />
          <rect x="56" y="52" width="28" height="28" rx="4" fill="#3b82f6" />
          <circle cx="70" cy="38" r="16" fill="#fed7aa" />
          {/* Screen with chat */}
          <rect x="80" y="24" width="48" height="56" rx="6" fill="#374151" />
          <rect x="84" y="28" width="40" height="48" rx="4" fill="#f3f4f6" />
          <rect x="88" y="36" width="28" height="14" rx="4" fill="#e5e7eb" />
          <text x="92" y="46" fill="#4b5563" fontSize="5">
            Tell me about your experience
          </text>
          <rect x="88" y="58" width="32" height="10" rx="2" fill="#d1d5db" />
          <text x="92" y="65" fill="#9ca3af" fontSize="4">
            Type your answer
          </text>
          {/* AI bubble */}
          <rect x="108" y="14" width="24" height="14" rx="4" fill="#3b82f6" />
          <text x="112" y="23" fill="white" fontSize="5" fontWeight="600">
            AI
          </text>
          <path d="M118 28l-4 4v-4h4z" fill="#3b82f6" />
          <path
            d="M52 82l1.2 2.4 2.6.4-1.9 1.8.4 2.6-2.3-1.2-2.3 1.2.4-2.6-1.9-1.8 2.6-.4L52 82z"
            fill="#93c5fd"
          />
        </svg>
      );
    case 'prep':
      return (
        <svg {...common} className="mx-auto block">
          <ellipse cx="70" cy="78" rx="14" ry="8" fill="#93c5fd" />
          <rect x="56" y="52" width="28" height="28" rx="4" fill="#3b82f6" />
          <circle cx="70" cy="38" r="16" fill="#fed7aa" />
          {/* Document with checklist */}
          <rect
            x="82"
            y="28"
            width="42"
            height="56"
            rx="6"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1.5"
          />
          <circle cx="92" cy="42" r="4" fill="#22c55e" />
          <line
            x1="102"
            y1="42"
            x2="116"
            y2="42"
            stroke="#6b7280"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="92" cy="54" r="4" fill="#22c55e" />
          <line
            x1="102"
            y1="54"
            x2="118"
            y2="54"
            stroke="#6b7280"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="92" cy="66" r="4" fill="#d1d5db" />
          <line
            x1="102"
            y1="66"
            x2="114"
            y2="66"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Question mark icon */}
          <circle cx="118" y="78" r="10" fill="#3b82f6" />
          <text x="118" y="81" fill="white" fontSize="10" fontWeight="700" textAnchor="middle">
            ?
          </text>
          <path
            d="M52 82l1.2 2.4 2.6.4-1.9 1.8.4 2.6-2.3-1.2-2.3 1.2.4-2.6-1.9-1.8 2.6-.4L52 82z"
            fill="#93c5fd"
          />
        </svg>
      );
    default:
      return null;
  }
}

function FeatureCard({
  feature,
  className = '',
}: {
  feature: (typeof FEATURES)[0];
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-shadow duration-200 hover:shadow-lg ${className}`}
    >
      <div className="mb-4 flex justify-center min-h-[100px] items-center">
        <FeatureIllustration type={feature.illustrationKey} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed text-center flex-1 mb-6">
        {feature.description}
      </p>
      <Link
        to={feature.link}
        className="flex items-center justify-center rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm py-3 px-5 transition-colors duration-200"
      >
        MORE
      </Link>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Platform Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore powerful tools designed to help candidates find jobs faster, build strong
              resumes, and prepare confidently for interviews.
            </p>
          </div>

          {/* Responsive grid across all devices for smooth scrolling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {FEATURES.map(feature => (
              <FeatureCard key={feature.title} feature={feature} className="w-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
