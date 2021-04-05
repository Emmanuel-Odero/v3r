import React from "react";
import{ NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function about(){
    return(
    <header className="bg-blue-300">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink to="/" exact 
                activeClassName="text-white-100 bg-red-800 rounded"
                className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                >
                    vacant2rent. 
                </NavLink>
                <NavLink to="/Search"
                activeClassName="text-red-100 bg-red-700"
                className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold"

                >
                    see properties. 
                </NavLink>
                <NavLink to="/project"
                activeClassName="text-red-100 bg-red-700"
                className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold"
                >
                    View listing.
                </NavLink>
                <NavLink to="/contact"
                activeClassName="text-red-100 bg-red-700"
                className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold"
                >
                    Contact us
                </NavLink>

                <NavLink to="/Blog"
                activeClassName="text-red-100 bg-red-700"
                className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold"
                >
                    Blog
                </NavLink>
            </nav>
        </div>
    </header>)
}