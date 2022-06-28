import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'
import ContactUs from "../components/ContactUs";

export default function ContactUsPage({ frontmatter, content }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | Contact Us</title>
                <meta name="description" content="Conact Us | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx-auto prose'>
                <h1 className="text-4xl mb-7">{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                <div className='flex gap-8 flex-wrap md:flex-nowrap'>
                    <div className='md:flex-1'>
                        <ContactUs />
                    </div>
                    <div className='md:flex-1'>
                    <img 
                        src='/tudor-tiny-house.jpg' 
                        alt="Tudor tiny house"
                    />
                    </div>
                </div>
            </div>
      </div>
  );
}

export async function getStaticProps() {
  const fileName = fs.readFileSync(`posts/pages/contact.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

