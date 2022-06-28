import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'


export default function AboutPage({ frontmatter, content }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | About Us</title>
                <meta name="description" content="About | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx-auto prose'>
                <h1 className="text-4xl mb-7">{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
        </div>
  );
}

export async function getStaticProps() {
  const fileName = fs.readFileSync(`posts/pages/about.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

