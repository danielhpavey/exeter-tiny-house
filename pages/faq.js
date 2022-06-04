import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Link from 'next/link';



export default function FaqPage({ posts }) {
  return (
    <div className=''>
      <h1 className="text-5xl mb-7">Frequently Asked Questions</h1>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className=''
        >
          <Link href={`/faq/${slug}`}>
            <a>
              <h1 className=''>{frontmatter.title}</h1>
            </a>
          </Link>
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
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

