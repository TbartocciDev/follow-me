import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import * as mapsAPi from '../../utilities/maps-api';

export default function DashboardPage({ user, maps }) {
    const [userMaps, setUserMaps] = useState([]);

    useEffect(function(){
        async function getMaps() {
            const maps = await mapsAPi.getAll();
            setUserMaps(maps);
        }
        getMaps();
    }, []);

    return (
        <main>
            <h1>Dashboard</h1>
            <Link to="/dashboard/trip-create">
                <button>Create a map</button>
            </Link>
        </main>
    )
}