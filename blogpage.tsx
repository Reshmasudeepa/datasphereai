<<<<<<< HEAD
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../api/blog';
import { PLACEHOLDER_IMG, SAMPLE_POSTS } from '../data/newsPosts';
=======
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllBlogs, type BlogPost } from '../api/blog';
import { PLACEHOLDER_IMG } from '../data/newsPosts';
>>>>>>> 4f05fc1 (09-07)

const SUMMARY_MAX_LENGTH = 120;

const FALLBACK_CARD_IMAGES = [
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80',
  'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1200&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80',
];

function resolveCardImage(post: BlogPost, index: number): string {
  if (post.coverImgUrl) return post.coverImgUrl;

  const haystack = `${post.title} ${post.slug} ${post.tags.join(' ')}`.toLowerCase();
  if (/(resume|ats|cv)/.test(haystack)) return FALLBACK_CARD_IMAGES[0];
  if (/(interview|mock interview|behavioral|star method)/.test(haystack)) return FALLBACK_CARD_IMAGES[1];
  if (/(job alert|job search|scrolling|daily job)/.test(haystack)) return FALLBACK_CARD_IMAGES[2];

  return FALLBACK_CARD_IMAGES[index % FALLBACK_CARD_IMAGES.length] ?? PLACEHOLDER_IMG;
}

function truncateSummary(text: string, maxLen = SUMMARY_MAX_LENGTH): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).trim() + '…';
}

function formatDate(raw?: string): string {
  if (!raw) return 'N/A';
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toLocaleDateString();
}

export function BlogsPage() {
<<<<<<< HEAD
  const posts = useMemo<BlogPost[]>(() => {
    return SAMPLE_POSTS.map((post) => ({
      id: post.id.toString(),
      slug: post.slug,
      title: post.title,
      content: post.fullContent,
      tags: [post.category],
      status: 'published',
      coverImgUrl: post.imageUrl,
      createdAt: new Date(post.date).toISOString(),
      updatedAt: new Date(post.date).toISOString(),
    }));
=======
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const visiblePosts = posts.slice(0, 3);

  useEffect(() => {
    let isMounted = true;
    const loadBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchAllBlogs();
        if (!isMounted) return;
        setPosts(data);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadBlogs();
    return () => {
      isMounted = false;
    };
>>>>>>> 4f05fc1 (09-07)
  }, []);

  const isLoading = false;
  const error: string | null = null;
  const visiblePosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
              Career Insights News
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Read the latest articles on job search strategies, career development, industry
              trends, and success stories from our community.
            </p>
          </div>

          {isLoading && (
            <div className="max-w-6xl mx-auto py-12 text-center text-gray-600">Loading blogs...</div>
          )}

          {!isLoading && error && (
            <div className="max-w-6xl mx-auto py-12 text-center">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          )}

          {!isLoading && !error && posts.length === 0 && (
            <div className="max-w-6xl mx-auto py-12 text-center text-gray-600">
              No blog posts yet
            </div>
          )}

          {!isLoading && !error && visiblePosts.length > 0 && (
            <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {visiblePosts.map((post, index) => (
                <article
                  key={`${post.slug || 'post'}-${post.id || index}`}
                  className="group bg-brand-surface rounded-xl border border-brand-secondary-100 shadow-md shadow-brand-primary/5 overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <div className="aspect-[2/1] bg-gray-50 overflow-hidden">
                    <img
                      src={resolveCardImage(post, index)}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      width="480"
                      height="240"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="text-lg font-bold text-gray-900 leading-snug">{post.title}</h2>

                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <span className="font-semibold text-gray-800">Status:</span>{' '}
                        {post.status || 'N/A'}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">Date:</span>{' '}
                        {formatDate(post.createdAt)}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">Slug:</span>{' '}
                        {post.slug || 'N/A'}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">Tags:</span>{' '}
                        {post.tags?.length ? post.tags.join(', ') : 'N/A'}
                      </p>
                    </div>

                    <p className="text-sm leading-6 text-gray-600">
                      {truncateSummary((post.content || '').replace(/\s+/g, ' ').trim())}
                    </p>

                    {post.id ? (
                      <Link
                        to={`/news/${post.id}`}
                        className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-600 transition-colors"
                      >
                        Read More
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
