import React from "react"
import {Link } from "react-router-dom";
import image from "../img/homepg.jpg"
export default function listprop(){
    return(
        <main>
            <img src={image} alt="keys" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <table class="table-auto">
                    <tr className="">
                        <td>
                            <Link to="/Listprop"
                                className="text-blue-900 bg-yellow-500 inflex-flex items-center py-3 px-3 my-6 rounded-lg py-3 px-6 text-white text-2xl font-bold">
                                    
                                    MAKE LISTING
                                    
                            </Link>
                        </td>

                        <td>
                            <Link to="/Search"
                                className="text-blue-900 bg-yellow-500 inflex-flex items-center py-3 px-3 my-6 rounded-lg py-3 px-6 text-white text-2xl font-bold">
                                    
                                    ENTER V2R CODE
                                    
                            </Link>
                        </td>
                    </tr>
                </table>
            </section>
        </main>
    )
}