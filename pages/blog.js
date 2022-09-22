import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Page from '../components/Page'
import BlogSummary from '../components/BlogSummary'


export default function BlogPage({ posts }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | Blog</title>
                <meta name="description" content="Blog | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='mx-auto prose  mt-14'>
            <h1 className="text-4xl mb-7">Our Blog</h1>
              {posts.map(({ slug, frontmatter, content }) => (
                <div key={slug} className=''>
		  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <BlogSummary f={frontmatter} c={content} slug={slug}/>
		   </ul>
                </div>
              ))}
            </div>
        </div>
  );
}


export async function getStaticProps() {
  const files = fs.readdirSync('posts/blog');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/blog/${fileName}`, 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content
    };
  });

  return {
    props: {
      posts,
    },
  };
}
