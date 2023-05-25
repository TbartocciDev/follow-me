import PostListItem from "./PostListItem"

export default function PostList({ posts }) {
    if (posts.count) {
        return (
            <div className="blog-list">
                {posts.map((p, key) => (
                    <PostListItem post={p} key={key}/>
                ))}
            </div>
        )
    } else {
        return (
            <div>
                <h1>There are no posts in this blog yet...</h1>
            </div>
        )
    }
}