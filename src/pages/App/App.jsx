import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ExplorePage from '../ExplorePage/ExplorePage';
import BlogPage from '../BlogPage/BlogPage';
import PostPage from '../PostPage/PostPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MapCreationForm from '../../components/MapCreationForm/MapCreationForn';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import * as mapsAPi from '../../utilities/maps-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [menuMaps, setMenuMaps] = useState([]);

  useEffect(function(){
    async function getMaps() {
      const maps = await mapsAPi.getAll();
      setMenuMaps(maps);
    }
    getMaps();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user}/>
            <Routes>
              {/* Route components in here */}
              <Route path='/explore' element={<ExplorePage maps={menuMaps}/> }/>
              <Route path='/blog/:id/*' element={<BlogPage/> }/>
              <Route path='/post/:id/*' element={<PostPage/> }/>
              <Route path='/dashboard' element={<DashboardPage user={user}/> }/>
              <Route path='/dashboard/blog-create' element={<MapCreationForm user={user}/> }/>
              <Route path='/profile' element={<ProfilePage user={user}/>} setUser={setUser} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
