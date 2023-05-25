import "./BlogHeader.css"

export default function BlogHeader({ blog }) {
    return (
        <div className="blog-header">
            <div className="title-name">
                <h1>{blog.title}</h1>
                &nbsp;&nbsp;
                <h4>By {blog.user}</h4>
            </div>
            <h3>{blog.bio}</h3>
        </div>
    )
}