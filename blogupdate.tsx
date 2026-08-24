import { useState, FormEvent } from 'react';
import { Header } from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';

type NewBlogForm = {
  title: string;
  shortDescription: string;
  fullContent: string;
  publishDate: string;
  imageFile?: File | null;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

type StoredNewsCard = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  fullContent: string;
  date: string;
  category: string;
  imageUrl?: string;
};

// Mock API handler – replace with real API integration later.
async function mockCreateBlog(form: NewBlogForm): Promise<StoredNewsCard> {
  const storedRaw = typeof window !== 'undefined' ? window.localStorage.getItem('newsBlogs') : null;

  const existing: StoredNewsCard[] = storedRaw ? JSON.parse(storedRaw) : [];

  const id = Date.now();
  const newEntry: StoredNewsCard = {
    id,
    slug: `${slugify(form.title)}-${id}`,
    title: form.title,
    summary: form.shortDescription,
    fullContent: form.fullContent,
    date: form.publishDate,
    category: 'News',
  };

  const next = [newEntry, ...existing];

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('newsBlogs', JSON.stringify(next));
  }

  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 400));

  return newEntry;
}

export function BlogUploadPage() {
  const [form, setForm] = useState<NewBlogForm>({
    title: '',
    shortDescription: '',
    fullContent: '',
    publishDate: '',
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange =
    (field: keyof NewBlogForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setForm(prev => ({
      ...prev,
      imageFile: file,
    }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.title.trim()) nextErrors.title = 'Blog title is required.';
    if (!form.shortDescription.trim())
      nextErrors.shortDescription = 'Short description is required.';
    if (!form.fullContent.trim()) nextErrors.fullContent = 'Full content is required.';
    if (!form.publishDate) nextErrors.publishDate = 'Publish date is required.';
    if (!form.imageFile) nextErrors.imageFile = 'Please upload a cover image.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');

    if (!validate()) return;

    try {
      setIsSubmitting(true);
      await mockCreateBlog(form);

      setSuccessMessage('Blog uploaded successfully. It is now visible on the News page.');

      // Reset form fields (keep image input clear as well)
      setForm({
        title: '',
        shortDescription: '',
        fullContent: '',
        publishDate: '',
        imageFile: undefined,
      });
      setErrors({});
      // Clear file input element
      const fileInput = document.getElementById('image') as HTMLInputElement | null;
      if (fileInput) fileInput.value = '';
    } catch (err) {
      // In a real implementation, surface a proper error message here
      setSuccessMessage('Something went wrong while uploading. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Blog Upload (Admin)
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Create and publish new news articles for the Career Insights News page.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6"
          >
            {successMessage && (
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                {successMessage}
              </div>
            )}

            {/* Blog Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">
                Blog Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={form.title}
                onChange={handleChange('title')}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                placeholder="Enter a clear, descriptive title"
              />
              {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
            </div>

            {/* Short Description */}
            <div>
              <label
                htmlFor="shortDescription"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Short Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="shortDescription"
                value={form.shortDescription}
                onChange={handleChange('shortDescription')}
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                placeholder="2–3 lines summarizing the article"
              />
              {errors.shortDescription && (
                <p className="mt-1 text-xs text-red-600">{errors.shortDescription}</p>
              )}
            </div>

            {/* Full Content */}
            <div>
              <label
                htmlFor="fullContent"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Full Content <span className="text-red-500">*</span>
              </label>
              <textarea
                id="fullContent"
                value={form.fullContent}
                onChange={handleChange('fullContent')}
                rows={8}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                placeholder="Write the full blog content here..."
              />
              {errors.fullContent && (
                <p className="mt-1 text-xs text-red-600">{errors.fullContent}</p>
              )}
            </div>

            {/* Image Upload and Publish Date */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Image Upload <span className="text-red-500">*</span>
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-700 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {errors.imageFile && (
                  <p className="mt-1 text-xs text-red-600">{errors.imageFile}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="publishDate"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Publish Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="publishDate"
                  type="date"
                  value={form.publishDate}
                  onChange={handleChange('publishDate')}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
                {errors.publishDate && (
                  <p className="mt-1 text-xs text-red-600">{errors.publishDate}</p>
                )}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Blog'}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
