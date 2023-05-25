import BlogList from "../../components/BlogList/BlogList"

export default function ExplorePage({ maps }) {
    return (
        <main>
            <h1>Explore Page</h1>
            <BlogList blogs={maps} />
        </main>
    )
}