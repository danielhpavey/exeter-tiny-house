import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Link from 'next/link';



export default function FaqPage({ posts }) {
  return (
    <div className=''>
      <h1 className="text-4xl mb-7">Frequently Asked Questions</h1>
      <img src="/tiny-house-single-bedroom.jpg#right" />
      {posts.map(({ slug, frontmatter, content }) => (
        <div key={slug} className=''>
          <details className='my-4 cursor-pointer'>
            <summary className="my-4">{frontmatter.title}</summary>
            <div className="cursor-auto" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </details>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts/faq');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/faq/${fileName}`, 'utf-8');
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

