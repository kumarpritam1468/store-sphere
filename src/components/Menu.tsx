"use client"

import { useState } from "react"
import { Twirl as Hamburger } from 'hamburger-react'
import Link from "next/link";

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    setOpen(true);
                } else {
                    setOpen(false);
                }
            }} />

            {open && 
                <div className=" absolute bg-black left-0 top-20 h-[calc(100svh-5rem)] w-full gap-8 text-xl text-white flex flex-col justify-center items-center z-50">
                    <Link href='/'>Home</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Deals</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Log out</Link>
                    <Link href='/'>Cart</Link>
                </div>
            }
        </div>
    )
}

export default Menu