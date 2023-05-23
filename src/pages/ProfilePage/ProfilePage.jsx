import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function ProfilePage({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <main>
            <h1>Profile</h1>
            <h3>{user.name}</h3>
            <Link to="/" onClick={handleLogOut}>Log Out</Link>
        </main>
    )
}