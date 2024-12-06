"use client"

import Image from "next/image"
import logo from "@/public/logo.png"
import { FaBars } from "react-icons/fa"
import { redirect } from "next/navigation"

const NavBar = () => {

    return <div className="flex justify-between bg-brandSecondary items-center h-24 md:px-10 px-2">
        <div className="w-full justify-start flex">
            <Image src={logo} alt="website logo" />
        </div>
        <ul className="hidden md:flex gap-6 w-full font-medium justify-center">
            <li className="text-brandColor">Home</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>About Us</li>
        </ul>
        <div className="md:hidden">
            <FaBars size={30} className="text-brandColor"/>
        </div>
        <div className="hidden md:flex gap-3 w-full justify-end">
            <button onClick={() => redirect("/auth")} className="bg-white text-brandColor p-2 px-5 rounded-xl">LOG IN</button>
            <button className="bg-brandColor text-white p-2 px-5 rounded-xl">SIGN UP</button>
        </div>
    </div>
}

export default NavBar
