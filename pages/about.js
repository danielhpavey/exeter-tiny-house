import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Page from '../components/Page'
import Profile from '../components/Profile'

export default function AboutPage({ posts }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | About Us</title>
                <meta name="description" content="About | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Page f={posts[0].frontmatter} c={posts[0].content}/>

            <h1 className="text-4xl mb-7" id="members">Our Members</h1>
            <div className='mx-auto prose flex flex-wrap gap-x-14 justify-between mt-14'>
              {posts.slice(1).map(({ slug, frontmatter, content }) => (
                <div key={slug} className='md:w-5/12'>
                    <Profile f={frontmatter} c={content}/>
                </div>
              ))}
            </div>
        </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts/about');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/about/${fileName}`, 'utf-8');
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
