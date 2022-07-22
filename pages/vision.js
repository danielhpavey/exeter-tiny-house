import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Page from '../components/Page'


export default function IndexPage({ frontmatter, content }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | Vision</title>
                <meta name="description" content="Vision | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Page f={frontmatter} c={content}/>

        </div>
  );
}

export async function getStaticProps() {
  const fileName = fs.readFileSync(`posts/pages/vision.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

