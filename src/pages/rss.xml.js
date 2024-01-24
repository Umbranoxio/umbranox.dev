import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
   const posts = await getCollection('blog');
   return rss({
      title: "umbra's blog",
      description: 'the place where i write things',
      site: context.site,
      items: posts.map((post) => ({
         title: post.data.title,
         description: post.data.description,
         pubDate: post.data.publishDate,
         link: `/blog/${post.slug}/`,
      })),
   });
}
