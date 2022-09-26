import md from 'markdown-it'
import Head from 'next/head'
import GeneralHead from '../components/GeneralHead'
import TwitterHead from '../components/TwitterHead'
import { useRouter } from 'next/router'
import BlogDate from './BlogDate'

export default function Page(data) {
    const router = useRouter()
    return (
            <div>
                <Head>
                  <GeneralHead
                    description={data.f.metaDesc}
                    ogUrl={router.pathname}
                    ogImage={data.f.socialImage}
                    ogTitle={data.f.title}
                    />
                   <TwitterHead
                    description={data.f.metaDesc}
                    ogUrl={router.pathname}
                    ogImage={data.f.socialImage}
                    ogTitle={data.f.title}
                  />
                </Head>
        <div className='mx-auto prose'>
            <h1 className="text-4xl mb-7">{data.f.title}</h1>
            <img src={data.f.image + "#right"} alt={data.f.metaTitle} />
            <span className="mb-7 block text-gray-500 text-base -mt-5"><BlogDate d={data.f.date}/></span>
            <div dangerouslySetInnerHTML={{ __html: md().render(data.c) }} />
        </div>
        </div>
    )
}
