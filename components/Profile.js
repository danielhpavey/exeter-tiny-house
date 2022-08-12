import md from 'markdown-it'

export default function Profile(data) {
    return (
        <div className='mb-14'>
            <img src={data.f.image} className="max-w-[200px] mb-7 rounded-full"/>
            <h2 className="text-3xl text-center">{data.f.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: md().render(data.c) }} />
        </div>
    )
}
