import md from 'markdown-it'
import BlogDate from './BlogDate'

export default function BlogSummary(data) {
    return (
        <div className='mb-14 flex gap-7'>
            <div className="w-[200px]">
                <img src={data.f.image} className="max-w-[200px]" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl">{data.f.title}</h2>
                <span><BlogDate d={data.f.date}/></span>
                <div dangerouslySetInnerHTML={{ __html: data.f.metaDesc }} />
                <a href={'/blog/' + data.slug}>Read More</a>
            </div>
        </div>
    )
}
