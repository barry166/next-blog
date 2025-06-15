import type { GiscusConfig } from '@/components/comments/types';

export const giscusConfig: GiscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID!,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
  mapping: 'pathname',
  strict: true,
  reactionsEnabled: true,
  emitMetadata: false,
  inputPosition: 'bottom',
  lang: 'zh-CN',
};
