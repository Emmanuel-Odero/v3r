import React from "react"
import {Link } from "react-router-dom";
import image from "../img/backgroundkeys.jpg"
export default function home(){
    return(
        <main>
            <img src={image} alt="keys" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <table class="table-auto">
                    <thead className="py-8 text-3xl text-white font-bold cursive leading-none lg:leading-snug home" ><h5>WHAT DO YOU WANT</h5> </thead>
                    <tr className="">
                        <td>
                            <Link to="/Listprop"
                                className="text-blue-900 bg-yellow-500 inflex-flex items-center py-3 px-3 my-6 rounded-lg py-3 px-6 text-white text-2xl font-bold">
                                    
                                    
                                    LIST A PROPERTY
                                    
                            </Link>
                        </td>

                        <td>
                            <Link to="/Search"
                                className="text-blue-900 bg-yellow-500 inflex-flex items-center py-3 px-3 my-6 rounded-lg py-3 px-6 text-white text-2xl font-bold">
                                    
                                    SEARCH PROPERTIES
                                    
                            </Link>
                        </td>
                    </tr>
                </table>
            </section>
        </main>
    )
}