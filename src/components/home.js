import React from "react"
import image from "../backgroundkeys.jpg"
export default function home(){
    return(
        <main>
            <img src={image} alt="keys" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h5 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home">WHAT DO YOU WANT</h5>
            </section>
        </main>
    )
}