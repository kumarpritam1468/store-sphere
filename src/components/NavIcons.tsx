"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"

const NavIcons = () => {
    const router = useRouter();
    const [profileOpen, setProfileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        }

        setProfileOpen(!profileOpen);
    }

    return (
        <div className=" flex items-center justify-center gap-4 xl:gap-6 px-4 relative">
            <Image src="/profile.png" height={24} width={24} alt="profile" className=" cursor-pointer" onClick={handleProfile} />

            {profileOpen &&
                <div className=" absolute flex gap-2 flex-col p-4 left-0 top-12 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-40">
                    <Link href="/profile">Profile</Link>
                    <Link href="/logout">Log out</Link>
                </div>
            }

            <Image src="/notification.png" height={24} width={24} alt="notification" className=" cursor-pointer" />

            <div className=" relative cursor-pointer">
                <Image src="/cart.png" height={24} width={24} alt="cart" onClick={() => setCartOpen(!cartOpen)} />
                <div className=" absolute bg-main-red rounded-full size-5 -top-2 -right-2 text-sm flex items-center justify-center text-white">2</div>
            </div>

            {cartOpen &&
                <CartModal />
            }
        </div>
    )
}

export default NavIcons