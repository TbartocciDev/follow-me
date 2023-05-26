import BlogList from "../../components/BlogList/BlogList"

export default function ExplorePage({ maps }) {
    return (
        <main>
            <BlogList blogs={maps} />
        </main>
    )
}