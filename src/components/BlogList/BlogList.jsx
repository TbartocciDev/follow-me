import BlogListItem from "./BlogListItem"
import "./BlogList.css"

export default function BlogList({ blogs }) {
    if (!blogs.count) {
        return (
            <div className="blog-list">
                {blogs.map((b, key) => (
                    <BlogListItem blog={b} key={key}/>
                ))}
            </div>
        ) 
    } else {
        return (
            <h2>There are no blogs available at this time... </h2>
        ) 
    }
}