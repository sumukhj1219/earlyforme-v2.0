import { env } from '~/env';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: 'Earlyfor.me',
  title: 'Build your waitlists within few clicks.',
  description: 'The Fastest Way to Build and Launch Waitlists.',
  url: env.NEXT_PUBLIC_URL || "http://localhost:3000",
  ogImage: '/meta/og.png',
  author: {
    name: 'Sumukh',
    twitter: '@iam_enginner',
    github: 'sumukhj1219',
    email: 'sumukhjoshi75@gmail.com'
  },
  keywords: [
    'multi-tenant',
    'saas',
    'waitlists',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'webdevelopment',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  "/": {
    title: 'Earlyfor.me - Build your waitlists within few clicks.',
    description: 'The Fastest Way to Build and Launch Waitlists.',
    keywords: [
      'Home',
      'multi-tenant',
      'saas',
      'waitlists',
      'developer',
      'full-stack',
      'react',
      'nextjs',
      'typescript',
      'webdevelopment',
    ],
    ogImage: '/meta/og.png',
    twitterCard: 'summary_large_image'
  },

  '/create': {
    title: 'Create - Explore templates and create your waitlists.',
    description: 'With the help of highly customizable templates create your waitlists. Publish them to internet without any domain configuration.',
    keywords: [
      'Create waitlists',
      'Publish',
      'multi-tenant',
      'saas',
      'waitlists',
      'developer',
      'full-stack',
      'react',
      'nextjs',
      'typescript',
      'webdevelopment',
    ],
    ogImage: '/meta/logo.png',
    twitterCard: 'summary'
  },

  '/assets': {
    title: 'Assets - Manage your logos and images in here to retrive them in future.',
    description: 'Earlyfor.me has an asset management system helps to manage and retrive assets.',
    keywords: [
      'Manage waitlists',
      'Assets',
      'Cloudflare',
      'R2-Object-Storage',
      'multi-tenant',
      'saas',
      'waitlists',
      'developer',
      'full-stack',
      'react',
      'nextjs',
      'typescript',
      'webdevelopment',
    ],
    ogImage: '/meta/logo.png',
    twitterCard: 'summary'
  },

  '/waitlists': {
    title: 'Waitlists - Manage your waitlists and their status',
    description: 'Earlyfor.me has an waitlist management system helps to manage waitlists.',
    keywords: [
      'Manage waitlists',
      'Waitlists',
      'Assets',
      'Cloudflare',
      'R2-Object-Storage',
      'multi-tenant',
      'saas',
      'waitlists',
      'developer',
      'full-stack',
      'react',
      'nextjs',
      'typescript',
      'webdevelopment',
    ],
    ogImage: '/meta/logo.png',
    twitterCard: 'summary'
  },

  '/analyze/*': {
    title: 'Analytics - Analyze your customers impressions on your waitlists.',
    description: 'With enabled analytics it becomes convinient to analyze waitlists and manage them.',
    keywords: [
      'Analyze waitlists',
      'Impressions',
      'Views',
      'Subscribers',
      'R2-Object-Storage',
      'multi-tenant',
      'saas',
      'waitlists',
      'developer',
      'full-stack',
      'react',
      'nextjs',
      'typescript',
      'webdevelopment',
    ],
    ogImage: '/meta/logo.png',
    twitterCard: 'summary'
  },

  '/edit/*': {
    title: 'Edit - Edit your waitlists.',
    description: 'Earlyfor.me enables you to customize your waitlists anytime and anywhere.',
    keywords: [
      'Edit waitlists',
      'R2-Object-Storage',
      'multi-tenant',
      'saas',
      'waitlists',
      'developer',
      'full-stack',
      'react',
      'nextjs',
      'typescript',
      'webdevelopment',
    ],
    ogImage: '/meta/logo.png',
    twitterCard: 'summary'
  }
}

export function getPageMetadata(pathname: string): PageMeta {
  if (pageMetadata[pathname]) return pageMetadata[pathname]

  for (const key in pageMetadata) {
    if (key.includes('*')) {
      const regex = new RegExp('^' + key.replace('*', '.*') + '$')
      if (regex.test(pathname)) return pageMetadata[key] as PageMeta
    }
  }

  return pageMetadata['/'] as PageMeta
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname)
  const imageUrl = new URL(pageMeta.ogImage || siteConfig.ogImage, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  }

}

