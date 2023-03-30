import md from 'markdown-it'
import Head from 'next/head'
import GeneralHead from './GeneralHead'
import TwitterHead from './TwitterHead'
import { useRouter } from 'next/router'
import BlogDate from './BlogDate'

export default function Page(data) {
    const router = useRouter()

    return (
            <div>
                <Head>
                  <GeneralHead
                    description={data.f.metaDesc}
                    ogUrl={router.asPath}
                    ogImage={data.f.image}
                    ogTitle={data.f.metaTitle}
                    />
                   <TwitterHead
                    description={data.f.metaDesc}
                    ogUrl={router.asPath}
                    ogImage={data.f.image}
                    ogTitle={data.f.metaTitle}
                  />
                </Head>
        <div className='mx-auto prose'>
            <h1 className="text-4xl mb-7">{data.f.title}</h1>
            <img className="no-shadow" src={data.f.image + "#right"} alt={data.f.metaTitle} />
            <span className="mb-7 block text-gray-500 text-base -mt-5"><BlogDate d={data.f.date}/></span>
            <div dangerouslySetInnerHTML={{ __html: md().render(data.c) }} />
        </div>
        </div>
    )
}
