import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBox from './MainBox'
import './LocalEvents.css';
const localEvents= ()=>{
return(
    <div className="container-localEvents">
        <div className="profilepic">
            <img src="https://i.stack.imgur.com/l60Hf.png"></img>
        </div>
        <header>
            <h2>Local Events</h2>
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <input type="text" />
        </header>
        <nav>
            <ul>
                <li>Upcoming</li>
                <li>Popular</li>
                <li>Newest</li>
            </ul>
        </nav>
        <MainBox />
        <footer>
        &#60;
        <span>Page 1 of 56</span>
        &#62;
        </footer>
    </div>
)
}
export default localEvents