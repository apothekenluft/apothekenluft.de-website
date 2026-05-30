export type BlogFrontmatter = {
  title?: string;
  date?: string | Date;
  categories?: string[];
  tags?: string[];
  coverImage?: string;
};

export type BlogPost = {
  url?: string;
  frontmatter?: BlogFrontmatter;
  rawContent?: () => string;
  teaser?: string;
  formattedDate?: string;
};

export function createTeaser(markdown: string, maxLength = 140) {
  const text = markdown
    .replace(/^---[\s\S]*?---/, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#]/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/^-{3,}$/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

export function formatDate(value?: string | Date) {
  if (!value) return '';
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(value));
}

export function getAllPosts() {
  const postModules = import.meta.glob('../pages/posts/*.md', { eager: true }) as Record<string, BlogPost>;
  const postRawFiles = import.meta.glob('../pages/posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  }) as Record<string, string>;

  return Object.entries(postModules)
    .map(([path, post]) => ({
      ...post,
      _path: path,
      teaser: createTeaser(postRawFiles[path] || ''),
      formattedDate: formatDate(post.frontmatter?.date),
    }))
    .sort(
      (a, b) =>
        new Date(b.frontmatter?.date ?? 0).getTime() -
        new Date(a.frontmatter?.date ?? 0).getTime()
    );
}

export function getPrevNextPosts(currentUrl?: string) {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post.url === currentUrl);

  if (currentIndex === -1) {
    return { previousPost: undefined, nextPost: undefined };
  }

  return {
    previousPost: posts[currentIndex + 1],
    nextPost: posts[currentIndex - 1],
  };
}