import React from "react";
import './navigation.css';
import { Link } from "react-router-dom";
const navigation = () => {
    return(
    <div className="navigation">
        <ul className="list">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="contactme">Contact Me</Link></li> 
        </ul>
    </div>
    )
}
export default navigation;