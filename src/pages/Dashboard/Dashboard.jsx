export default function Dashboard({ user }) {
    return (
        <main>
            <h1>Dashboard</h1>
            <h3>{user.name}</h3>
        </main>
    )
}