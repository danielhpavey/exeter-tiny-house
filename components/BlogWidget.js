export default function BlogWidget() {
    return (
        <aside className="mb-7">
            <h3 className="text-2xl mb-2">Latest Blog Posts</h3>
            <ul>
            {process.env.blogList.slice(0, 3).map(({link, name}) => (
                <li key={link} className="mb-2"><a href={link}>{name}</a></li>
            ))}
            </ul>
        </aside>
    )
}