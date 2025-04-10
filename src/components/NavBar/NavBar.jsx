import { useState } from "react";
import Link from "../link/link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
const NavBar=()=>{
    const [open,setOpen] =useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/products", name: "Products" },
      ];
    return (
        <nav className="text-black p-6 bg-yellow-200">
        <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>{
            open===true?
            <AiOutlineClose></AiOutlineClose>:
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        }
        </div>
        <ul className={`md:flex duration-1000 absolute
        md:static
        ${open ? 'top-16':'-top-60'}
         bg-yellow-200 px-6`}>
        {
            routes.map(route=><Link key={route.id} route={route}></Link>)
        }
        </ul>
        
        </nav>
    );
};

export default NavBar;