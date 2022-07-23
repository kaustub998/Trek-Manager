import React, {useRef, useState}from 'react'
import "./Navbar.css"
import img_logo from "../Images/trekker logo.png"
import cancel from "../Images/cancel.png"
import search from "../Images/Search.png"
import menu from "../Images/Menu.png"
import {
    Link
} from "react-router-dom";
import { useEffect } from "react"

export const Navbar = () => {

    const [toggle_dropdown, settoggle_dropdown] = useState(false);

    let search_dropdown = () => {
        !toggle_dropdown ? settoggle_dropdown(true):settoggle_dropdown(false);
    };

    let menuRef = useRef();

    useEffect(() => 
    {
        let handler = (event) => 
        {
            if(!menuRef.current.contains(event.target))
            {
                settoggle_dropdown(false);
            }
            else
            {
                if(event.target.tagName==="LI")
                {
                    setsearch_value(event.target.innerText);
                }
            }
        }

      document.addEventListener("mousedown", handler);
      return (() => {document.removeEventListener("mousedown", handler)})
    });
    
    const [toggle_menu, settoggle_menu] = useState(false);

    let open_menu = () => {
        !toggle_menu ? settoggle_menu(true): settoggle_menu(false);
    };

    const [search_value, setsearch_value] = useState("");

  return (
    <div className='navbar_container'>
        <div className="navbar_title">
            <img src={img_logo} alt="logo_image" className="navbar_logo_image" />
            <div className='navbar_title_text'>
                <p>Trek</p>
                <p>Manager</p>
            </div>
        </div>
        <div className="navbar_searchBar" ref={menuRef}>
            <img src={search} alt="Search_icon" className="navbar_search_icon" />
            <input className="navbar_search_text" type="text" placeholder='Search for destinations' onClick={search_dropdown} value={search_value} onChange={(event)=>{setsearch_value(event.target.value)}}/>
            <div className={toggle_dropdown ? "search_dropdown search_dropdown_active":"search_dropdown search_dropdown_inactive" }>
                <ul>
                    <li>Recommendations</li>
                    <li>kaustub</li>
                </ul>
            </div> 
        </div>
        <ul className="navbar_wrapper">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about_us">About Us</Link></li>  
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Guides">Guides</Link></li>
        </ul>
        <div className='navbar_menu' onClick={open_menu}>
            <img src={!toggle_menu? menu : cancel} alt="menu_icon" className="navbar_menu_icon"/>
        </div>
    </div>
  )
}
