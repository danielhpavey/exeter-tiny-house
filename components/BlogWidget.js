export default function BlogWidget() {
    return (
        <aside className="mb-7">
            <h1 className="text-2xl md:text-4xl mb-3 md:mb-7">Latest Blog Posts</h1>
            <ul>
            {process.env.blogList.slice(0, 3).map(({link, name}) => (
                <li key={link} className="mb-2"><a href={link}>{name}</a></li>
            ))}
            </ul>
        </aside>
    )
}