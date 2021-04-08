import React from "react";
import{ NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function about(){
    return(
    <header className="bg-blue-300">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink to="/" exact 
                activeClassName="text-blue-900 bg-yellow-500 rounded-lg"
                className="inflex-flex items-center py-6 px-3 mr-4 text-white text-4xl font-bold cursive tracking-widest"
                >
                    vacant2rent. 
                </NavLink>
                <NavLink to="/Search"
                activeClassName="text-blue-900 bg-yellow-500"
                className="inflex-flex items-center py-3 px-3 my-6 rounded-full text-white text-2xl font-bold"

                >
                    see properties. 


                    </NavLink>
                <NavLink to="/Listprops"
                activeClassName="text-blue-900 bg-yellow-500"
                className="inflex-flex items-center py-3 px-3 my-6 rounded-full text-white  text-2xl font-bold"
                >
                    list Property
                </NavLink>

            
                <NavLink to="/project"
                activeClassName="text-blue-900 bg-yellow-500"
                className="inflex-flex items-center py-3 px-3 my-6 rounded-full text-white  text-2xl font-bold"
                >
                    View listing.
                </NavLink>
        


                <NavLink to="/contact"
                activeClassName="text-blue-900 bg-yellow-500"
                className="inflex-flex items-center py-3 px-3 my-6 rounded-full text-white text-2xl font-bold"
                >
                    Contact us
                </NavLink>

                <NavLink to="/Blog"
                activeClassName="text-blue-900 bg-yellow-500"
                className="inflex-flex items-center py-3 px-3 my-6 rounded-full py-3 px-6 text-white text-2xl font-bold"
                >
                    Blog
                </NavLink>

                <NavLink to="/Sign"
                activeClassName="text-blue-900 bg-yellow-500"
                className="inflex-flex items-center py-3 px-3 my-6 rounded-full py-3 px-6 text-white text-2xl font-bold"
                >
                    Sign In
                </NavLink>
            </nav>
        </div>
    </header>)
}