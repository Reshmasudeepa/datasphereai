// @ts-nocheck
import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SharePost } from '../components/ui/SharePost';
import { fetchAllBlogs, type BlogPost } from '../api/blog';
import { getNewsPostById, getNewsPostBySlug, PLACEHOLDER_IMG, type NewsPost } from '../data/newsPosts';
import { ArrowLeft } from 'lucide-react';

function renderContent(text: string) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  return paragraphs.map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <h3 key={i} className="text-lg font-bold text-slate-800 mt-6 mb-2">
          {para.replace(/\*\*/g, '')}
        </h3>
      );
    }
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-slate-600 leading-relaxed mb-4">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="font-semibold text-slate-800">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          ),
        )}
      </p>
    );
  });
}

export function NewsDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const routeKey = (id ?? '').trim();
  const localArticle = useMemo<NewsPost | undefined>(() => {
    if (!routeKey) return undefined;
    const numericId = Number(routeKey);
    const byNumericId = Number.isInteger(numericId) ? getNewsPostById(numericId) : undefined;
    if (byNumericId) return byNumericId;
    return getNewsPostBySlug(routeKey);
  }, [routeKey]);
  const [remotePosts, setRemotePosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!routeKey || localArticle) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await fetchAllBlogs();
        if (!mounted) return;
        setRemotePosts(posts);
      } catch {
        if (!mounted) return;
        setRemotePosts([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    loadPosts();
    return () => {
      mounted = false;
    };
  }, [routeKey, localArticle]);

  const article = useMemo<NewsPost | undefined>(() => {
    if (!routeKey) return undefined;
    if (localArticle) return localArticle;

    const byRemote = remotePosts.find((post) => post.id === routeKey || post.slug === routeKey);
    if (!byRemote) return undefined;

    return {
      id: Number.isInteger(Number(byRemote.id)) ? Number(byRemote.id) : -1,
      slug: byRemote.slug,
      title: byRemote.title,
      summary: byRemote.content,
      fullContent: byRemote.content,
      date: byRemote.createdAt,
      category: byRemote.tags?.[0] ?? 'News',
      imageUrl: byRemote.coverImgUrl,
    };
  }, [routeKey, localArticle, remotePosts]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-bg">
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center text-slate-600">Loading article...</div>
        </section>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-bg">
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Article Not Found</h1>
            <p className="text-slate-600 mb-6">
              The news article you&apos;re looking for doesn&apos;t exist or may have been removed.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primary-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const fullContent = article.fullContent ?? article.summary;
  const imageUrl = article.imageUrl ?? PLACEHOLDER_IMG;

  return (
    <div className="min-h-screen bg-brand-bg">
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-brand-secondary-200 bg-brand-secondary-50 px-2.5 py-1 text-xs font-semibold text-brand-primary">
              {article.category}
            </span>
            <time className="text-sm font-medium text-gray-500" dateTime={article.date}>
              {article.date}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-7">
            {article.summary}
          </p>

          <div className="max-w-2xl mx-auto aspect-[16/7] rounded-xl overflow-hidden bg-gray-100 mb-10">
            <img
              src={imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
              width="960"
              height="540"
            />
          </div>

          <div className="prose prose-slate max-w-none text-[17px] leading-8">{renderContent(fullContent)}</div>

          <SharePost title={article.title} className="mt-12 pt-8 border-t border-gray-200" />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
