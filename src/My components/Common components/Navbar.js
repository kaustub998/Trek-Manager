import React, {useRef, useState}from 'react'
import {FaBars, FaTimes, FaSearch} from 'react-icons/fa'
import img_logo from "../Images/trekker logo.png"
import {suggestions} from "./search_suggestions"
import {
    Link, useNavigate
} from "react-router-dom";
import { useEffect } from "react"

export const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        
        const position = window.scrollY;
        setScrollPosition((position/7).toFixed());
        console.log(scrollPosition)
        
    };

    const [width, setwidth] = useState(window.innerWidth);

    // hamburger menu for sm
    const [toggle_menu, settoggle_menu] = useState(false);

    let open_menu = () => {
        settoggle_menu(!toggle_menu);
    };
    // 

    // sliding search 
    const [search, setsearch] = useState(false);
    let search_ref = useRef();

    const [search_value, setsearch_value] = useState("");
    const [toggle_dropdown, settoggle_dropdown] = useState(false);

    useEffect(()=> {
        let handler1 = (e) => {
            if(search_ref.current.contains(e.target))
            {
                setsearch(true);
                settoggle_dropdown(true);
            }
            else{
                setsearch(false);
                settoggle_dropdown(false);
            }
            setwidth(window.innerWidth);
        }

        window.addEventListener('scroll', handleScroll);
        document.addEventListener("mousedown",handler1);

        return (() => {
            document.removeEventListener("mousedown",handler1);
            window.removeEventListener('scroll', handleScroll);
    })
    });
    //

    let search_onchange = (event)=>{
        let userdata=event.target.value;
        setsearch_value(userdata);
        let emptyarray= [];

        if (userdata){
            emptyarray=suggestions.filter(
                (data)=>{return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());}
            );
            emptyarray=emptyarray.map((data)=>{return data = 
                `<li class= 'p-4 hover:-translate-y-1 hover:text-[#1D3557] duration-300 ' >`+data+`</li>`});
        }
        
        let search_list = document.querySelector(".insert_search");
        let list = emptyarray;
        if(!list.length){
            
        }
        else{
            list= list.join(`<hr class = 'border-[#1D3557]'/>`);
        }
        console.log(list);
        search_list.innerHTML = list;

        let list_items=search_list.querySelectorAll("li");
        let a = (x) => select(x);
        for (let i=0;i< list_items.length;i++) {
            list_items[i].addEventListener("click",() => {a(list_items[i])});
        }
        
    };

    let navigate = useNavigate();

    let select = (element) => {
        setsearch_value(element.innerText);
        navigate(`/TrekDescription${element.innerText}`);
        settoggle_dropdown(false);
    };

  return (
    <div className={`w-full h-[80px] fixed  text-[#1D3557] flex justify-between items-center px-8 text-center z-50 transition-opacity duration-300 transition-bg
    ${scrollPosition>= 100 ? 'opacity-100 bg-[#bec8d6e1]': `opacity-${scrollPosition} bg-inherit 
    ${scrollPosition > 10? '' : 'pointer-events-none'}` }`}>

        <div className='flex justify-center items-center max-w-[200px]'>
            <img src={img_logo} alt="logo_image" className=' w-8 sm:w-12'/>
            <p className='text-lg sm:text-xl px-2'>Trek <br/> Manager</p>
        </div>

        <div ref={width>1200?search_ref:null} className={'hidden relative xl:flex bg-[#9eabbd] w-[500px] items-center rounded-lg bg-inherit'} >
            <FaSearch size={30} className='absolute left-4 pointer-events-none'/>
            <input className='w-full text-xl rounded-lg placeholder-[#1D3557] bg-inherit focus:bg-[#8093ad] duration-100 
            focus:ring-0 px-16 py-4' type="text" placeholder='Search for destinations' 
            value={search_value} onChange={search_onchange}/> 
           
            <div className={toggle_dropdown?'flex flex-col absolute top-[50px] bg-[#8093ad] w-full text-2xl text-left rounded-b-lg duration-300' : 'hidden' }> 
                <ul className={width>1200?'insert_search cursor-pointer flex flex-col justify-center':'hidden'}  >
                    
                </ul>  
                
            </div> 
        </div>

        <ul className='hidden md:flex justify-between items-center w-[500px] text-2xl'>
            <li className='hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/about_us">About Us</Link>
            </li>  
            <li className='hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/Guides">Guides</Link> 
            </li>
            <li className='hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>

        <div className='md:hidden z-20' onClick={open_menu}>
            {!toggle_menu? <FaBars size={20} className='z-50'/>:<FaTimes size={20} className='z-50'/>}
        </div>

        <ul className={!toggle_menu?'hidden':'absolute md:hidden top-0 left-0 flex flex-col justify-center items-center h-screen w-screen bg-[#bec8d6] z-10'}>

            <li className='py-2 my-6 text-3xl hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/">Home</Link>
            </li>

            <li className='py-2 my-6 text-3xl hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/about_us">About Us</Link>
            </li>  

            <li className='py-2 my-6 text-3xl hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/Contact">Guides</Link>
            </li>

            <li className='py-2 my-6 text-3xl hover:border-b-2 inline hover:-translate-y-1 duration-100 border-[#1D3557]'>
                <Link to="/Guides">Contact</Link>
            </li>

        </ul>

        {/* search bar for devices above sm below xl */}
        <div ref={(width>640 && width<1200)?search_ref:null} className={
        search?'fixed top-[12%] right-[-50px] hidden sm:flex xl:hidden duration-300 z-0 bg-inherit' 
        : 'fixed top-[12%] right-[-300px] hidden sm:flex xl:hidden hover:right-[-50px] duration-300 z-0 bg-inherit'} >
            <FaSearch size={30} className='absolute left-4 top-4 pointer-events-none'/>
            <input className='w-full text-xl placeholder-[#1D3557] bg-inherit focus:bg-[#8093ad] duration-300 focus:ring-0 px-16 py-4' type="text" placeholder='Search for destinations'
            value={search_value} onChange={search_onchange}/>
            <div className={toggle_dropdown?'flex flex-col absolute top-[50px] bg-[#8093ad] w-full text-2xl text-left rounded-b-lg duration-300' : 'hidden' }> 
                <ul className={(width>640 && width<1200)?'insert_search cursor-pointer flex flex-col justify-center':'hidden'}>

                </ul>  
            </div>  
        </div>

        {/* search bar for devices below sm */}
        <div ref={width < 640 ? search_ref : null} className='w-screen sm:hidden absolute left-0 top-[80px] bg-inherit' >
            <FaSearch size={30} className='absolute top-4 left-4 pointer-events-none'/>
            <input className='w-screen text-xl placeholder-[#1D3557] bg-inherit focus:bg-[#8093ad] 
            duration-300 focus:ring-0 px-16 py-4' type="text" placeholder='Search for destinations' 
            value={search_value} onChange={search_onchange}/>
            <div className={toggle_dropdown?'flex flex-col bg-[#8093ad] w-full text-2xl text-left rounded-b-lg duration-300' : 'hidden' }> 
                <ul className={width < 640 ?'insert_search cursor-pointer flex flex-col justify-center': 'hidden'}  >

                </ul>  
            </div> 

        </div>

    </div>
  )
}
