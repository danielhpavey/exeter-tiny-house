import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it'


export default function IndexPage({ frontmatter, content }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx-auto prose'>
                <h1 className="text-5xl mb-7">{frontmatter.title}</h1>
               <form name="contact" method="POST" data-netlify="true" action="contact/?success=true" >
                  <input type="hidden" name="subject" 
                  value="Exexter Tiny House Contact Form" />
                  <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                  </p>
                  <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                    <label>Message: <textarea name="message"></textarea></label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
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

