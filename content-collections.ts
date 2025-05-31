import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.{md,mdx}",
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    });
    return {
      ...document,
      mdx,
      url: `/posts/${document._meta.path}`,
      slug: document._meta.path,
    };
  },
});

export default defineConfig({
  collections: [posts],
});