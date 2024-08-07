import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="px-4 py-8 max-w-4xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-3xl mb-8 tracking-tighter text-center">Blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1))
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link className="flex flex-col space-y-4 mb-8" href={`/blog/${post.slug}`}>
              <div className="w-full flex flex-col md:flex-row items-start md:items-center">
                <img 
                  src={post.metadata.image} 
                  alt={post.metadata.title} 
                  className="w-full md:w-52 h-38 rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold tracking-tight">{post.metadata.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">
                    By {post.metadata.author} | {new Date(post.metadata.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-muted-foreground">{post.metadata.summary}</p>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
