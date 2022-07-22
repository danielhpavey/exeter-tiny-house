import md from 'markdown-it'

export default function Page(data) {
    return (
        <div className='mx-auto prose'>
            <h1 className="text-4xl mb-7">{data.f.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(data.c) }} />
        </div>
    )
}
