import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import * as mapsAPi from '../../utilities/maps-api';
import "./DashboardPage.css"

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
        <main className='dashboard-page'>
            <Link to="/dashboard/blog-create">
                <button>Create a map</button>
            </Link>
        </main>
    )
}