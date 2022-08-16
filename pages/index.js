import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Page from '../components/Page'
import GeneralHead from '../components/GeneralHead'
import TwitterHead from '../components/TwitterHead'


export default function IndexPage({ frontmatter, content }) {
  return (
        <div key='home'>
            <Head>
                <title>Exeter Tiny House Community</title>
      <meta name="description" content="Home | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />

                  <GeneralHead
                    description={frontmatter.metaDesc}
                    ogUrl={process.env.NEXT_PUBLIC_URL}
                    ogImage={frontmatter.socialImage}
                    ogTitle={frontmatter.title}
                    />
                   <TwitterHead
                    description={frontmatter.metaDesc}
                    ogUrl={process.env.NEXT_PUBLIC_URL}
                    ogImage={frontmatter.socialImage}
                    ogTitle={frontmatter.title}
                  />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Page f={frontmatter} c={content}/>

            <div className='flex justify-between flex-wrap gap-8 md:flex-nowrap'>
                <div className='block '>
                    <figure>
                    <img 
                        src='/tiny-house-group.jpg?nf_resize=fit&w=768' 
                        alt="Group of tiny house"
                    />
                    <figcaption className='text-center p-4'></figcaption>
                    </figure>
                </div>
                <div className='block '>
                    <img 
                        src='/yurt-in-woods.jpg?nf_resize=fit&w=768' 
                        alt="Yurt in the woods"
                    />
                </div>
            </div>
        </div>
  );
}

export async function getStaticProps() {
  const fileName = fs.readFileSync(`posts/pages/home.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

