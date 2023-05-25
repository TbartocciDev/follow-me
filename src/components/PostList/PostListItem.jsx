import { Link } from 'react-router-dom';

export default function PostListItem({ post }) {
    return (
        <Link to={`/post/${post._id}`} className='blog-link'>
            <div className="blog-list-item">
                <h1>{post.title}</h1>
            </div>
        </Link>
    )
}