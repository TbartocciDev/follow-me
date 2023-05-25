import BlogListItem from "./BlogListItem"

export default function BlogList({ blogs }) {
    return (
        <div className="blog-list">
            {blogs.map((b, key) => (
                <BlogListItem blog={b} key={key}/>
            ))}
        </div>
    )
}