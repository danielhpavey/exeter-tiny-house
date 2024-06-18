import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import Page from '../components/Page'
import BlogWidget from '../components/BlogWidget'

export default function IndexPage({ frontmatter, content }) {
  return (
        <div key='home'>
            <Head>
                <title>Exeter Tiny House Community</title>
      <meta name="description" content="Home | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
          <div className="grid md:grid-cols-2 md:gap-8">
            <div>
              <Page f={frontmatter} c={content}/>
            </div>
            <div className="md:text-right">
             <BlogWidget />
            </div>
          </div>
                
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
                        src='/exeter-tiny-house-community-members-under-a-tree.jpg?nf_resize=fit&w=768' 
                        alt="Exeter Tiny House Community Members Under A Tree"
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

