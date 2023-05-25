import { Link } from 'react-router-dom';

export default function BlogListItem({ blog }) {
    return (
        <Link to={`/blog/${blog._id}`} className='blog-link'>
            <div className="blog-list-item">
                <h1>{blog.title}</h1>
                <img src="/map.png"></img>
            </div>
        </Link>
    )
}