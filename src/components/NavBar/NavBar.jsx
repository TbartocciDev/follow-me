import { Link } from 'react-router-dom';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  const navBtns = document.querySelectorAll('.nav-btn')
  function handleClick(evt) {
    navBtns.forEach(function(btn) {
      btn.removeAttribute('id')
    })
    evt.target.setAttribute('id','selected-nav-link')
  }

  return (
    <>
      <nav>
        <Link to="/explore" className='nav-link'>
          <button className='nav-btn' id='selected-nav-link' onClick={handleClick}>Explore</button>
        </Link>
        <Link to="/dashboard" className='nav-link'>
          <button className='nav-btn' onClick={handleClick}>Dashboard</button>
        </Link>
        <Link to="/profile" className='nav-link'>
          <button className='nav-btn' onClick={handleClick}>Profile</button>
        </Link>
      </nav>
      <div className='nav-divider'></div>
    </>
  );
}