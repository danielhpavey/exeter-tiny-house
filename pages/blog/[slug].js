import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import BlogPage from '../../components/BlogPage'
import Head from 'next/head'
import CrowdfunderButton from '../../components/CrowdfunderButton';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/blog');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/blog/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div key=''>
        <Head>
            <title>{frontmatter.metaTitle}</title>
            <meta name="description" content={ frontmatter.metaDesc } />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BlogPage f={frontmatter} c={content}/>
        {frontmatter.title=='Exeter Tiny House Community Crowdfunder Launch' && <CrowdfunderButton />}
        
    </div>
  );
}
