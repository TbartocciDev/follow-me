import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ExplorePage from '../ExplorePage/ExplorePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MapCreationForm from '../../components/MapCreationForm/MapCreationForn';
import MapPage from '../MapPage/MapPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import * as mapsAPi from '../../utilities/maps-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [menuMaps, setMenuMaps] = useState([]);

  useEffect(function(){
    async function getMaps() {
      const maps = await mapsAPi.getAll();
      console.log(maps)
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
              <Route path='/dashboard' element={<DashboardPage user={user}/>}/>
              <Route path='/dashboard/trip-create' element={<MapCreationForm user={user}/>}/>
              <Route path='/map' element={<MapPage user={user}/>}/>
              <Route path='/profile' element={<ProfilePage user={user}/>} setUser={setUser}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
