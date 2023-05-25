import { Link } from 'react-router-dom';
import "./BlogTypeToggle.css"

export default function BlogTypeToggle( {blogType, setBlogType} ){
    const blogTypeBtns = document.querySelectorAll('.blog-type-button')
    function handleTypeClick(evt) {
        setBlogType(evt.target.value)
        blogTypeBtns.forEach(function(btn) {
            btn.removeAttribute('id')
        })
        evt.target.setAttribute('id','blog-type-selected')
    }
    return (
        <div className='blog-type-toggle'>
            <button 
                onClick={handleTypeClick} 
                value="standard" 
                className='blog-type-button'
                id='blog-type-selected'
            >Standard</button>
            <button 
                onClick={handleTypeClick} 
                value="map" 
                className='blog-type-button'
            >Map</button>
        </div>
    )
}