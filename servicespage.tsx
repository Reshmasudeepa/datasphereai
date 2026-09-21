import { useState } from 'react';
import { Header } from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { Monitor, FileText, Users, CheckSquare, ChevronRight } from 'lucide-react';

interface ServicePageProps {
  service: 'daily-job-updates' | 'ai-resume-builder' | 'ai-mock-interview' | 'interview-prep';
}

const serviceConfig = {
  'daily-job-updates': {
    title: 'Daily Job Updates',
    icon: Monitor,
    shortDescription: 'Get personalized job recommendations delivered to your inbox every morning.',
    fullDescription:
      'Receive curated opportunities matched to your skills, experience, and career goals. Our AI analyzes thousands of jobs daily to find the perfect roles for you.',
    features: [
      'Personalized job matching based on your profile',
      'New opportunities delivered daily at 9 AM',
      'One-click application process',
      'Salary insights and market trends',
      'Save jobs for later review',
      'Customizable job preferences',
    ],
  },
  'ai-resume-builder': {
    title: 'AI Resume Builder',
    icon: FileText,
    shortDescription: 'Create ATS-optimized resumes that get past screening systems.',
    fullDescription:
      'Transform your resume into a powerful application tool. Our AI analyzes job descriptions and optimizes your resume to highlight the most relevant skills and experiences.',
    features: [
      'ATS-optimized resume formatting',
      'Job description-specific customization',
      'Multiple professional templates',
      'Instant download and sharing',
      'Real-time feedback and suggestions',
      'Applicant Tracking System compatibility',
    ],
  },
  'ai-mock-interview': {
    title: 'AI Mock Interview',
    icon: Users,
    shortDescription: 'Practice with AI-powered mock interviews tailored to your target role.',
    fullDescription:
      'Gain confidence through realistic interview practice. Our AI interviewer simulates real scenarios and provides detailed feedback on your responses, tone, and communication.',
    features: [
      'Realistic interview scenarios',
      'Role-specific questions',
      'Real-time feedback and analysis',
      'Video recording and playback',
      'Performance metrics and tips',
      'Unlimited practice sessions',
    ],
  },
  'interview-prep': {
    title: 'Interview Preparation',
    icon: CheckSquare,
    shortDescription: 'Comprehensive guides, Q&A banks, and expert tips for interview success.',
    fullDescription:
      'Access everything you need to ace your interviews. From common questions to company-specific insights, we cover all bases for your preparation.',
    features: [
      'Industry-specific preparation guides',
      '1000+ common and role-specific questions',
      'Expert tips from top companies',
      'Company research resources',
      'Behavioral interview strategies',
      'Progress tracking and analytics',
    ],
  },
};

export function ServicesPage({ service }: ServicePageProps) {
  const config = serviceConfig[service];
  const Icon = config.icon;
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Clean and Minimal */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{config.title}</h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            {config.fullDescription} A dedicated recruiter will be assigned to apply to jobs on your
            behalf — ensuring every application is handled with precision and personal attention.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Description & CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{config.shortDescription}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Start using {config.title} today and transform your career search.
                </p>
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
              <div className="space-y-3">
                {config.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-900 hover:shadow-md transition-all duration-200 cursor-pointer"
                    onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="font-semibold text-gray-900">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose {config.title}?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Professionals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold mt-1">•</span>
                  <span>Save hours on repetitive job search tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold mt-1">•</span>
                  <span>Get matched with roles aligned with your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold mt-1">•</span>
                  <span>Improve your interview and application success rates</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How It Works</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold mt-1">→</span>
                  <span>Set up your preferences in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold mt-1">→</span>
                  <span>Let AI handle the work for you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold mt-1">→</span>
                  <span>Take action with confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who&apos;ve successfully landed their dream jobs using{' '}
            {config.title}.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
