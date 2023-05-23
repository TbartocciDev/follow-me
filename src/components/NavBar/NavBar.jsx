import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <Link to="/explore">Explore</Link>
      &nbsp; | &nbsp;
      <Link to="/dashboard">Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/map">Map</Link>
    </nav>
  );
}