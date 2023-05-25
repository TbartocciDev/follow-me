import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import * as mapsAPi from '../../utilities/maps-api';

export default function DashboardPage() {
    // const [userMaps, setUserMaps] = useState([]);

    // useEffect(function(){
    //     async function getMaps() {
    //         const maps = await mapsAPi.getUserBlogs();
    //         setUserMaps(maps);
    //     }
    //     getMaps();
    // }, []);

    return (
        <main>
            <h1>Dashboard</h1>
            <Link to="/dashboard/blog-create">
                <button>Create a map</button>
            </Link>
        </main>
    )
}