"use client"
import React from 'react'
import wp from "@/assets/wp.png";

const Logo = () => {
    const handleSchedule = () => {
        window.open(
            "https://wa.me/971556723009?text=Hello!%20I%20want%20to%20connect", 
            "_blank"
        )
    }
    return (
        <div
            onClick={handleSchedule}
            className="hover:cursor-pointer right-5 bottom-5 xl:right-10 xl:bottom-10 fixed z-[9999]"
        >
            <img
                className="h-15 w-15 xl:h-20 xl:w-20 animate-pulse"
                src={wp.src}
                alt="logo"
            />
        </div>

    )
}

export default Logo