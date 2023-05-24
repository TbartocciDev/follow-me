export default function ExplorePage({ maps }) {
    return (
        <main>
            <h1>Explore Page</h1>
            <div className="content-container">
                {maps.map((m, key) => (
                    <div className="post" key={key}>
                        <h1>{m.title}</h1>
                        <img src="/map.png"></img>
                    </div>            
                ))}
            </div>
        </main>
    )
}