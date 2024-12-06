import Image from "next/image"
import logo from "@/public/logo.png"
import { FaLocationDot } from "react-icons/fa6"
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa"

const Footer = () => {
    return <div className="flex px-2 md:px-10 mb-2">
        <div className="bg-brandSecondary text-brandColor px-2 sm:text-center md:px-10 pt-10 pb-2 mx-auto w-full rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex w-full flex-col gap-8">
                    <Image src={logo} alt="logo" />
                    <div>
                        <div className="flex gap-1 items-center font-semibold">
                            <FaLocationDot />
                            <p>Address: </p>
                        </div>
                        <div>
                            <p className="text-start">Building Number, Near Place, Kozhikode, 673001</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <FaPhone />
                            <p>+91 9384 765 434</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock />
                            <p>Response Hours: 09:00AM - 5:00PM</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaEnvelope />
                            <p className="truncate">mail.something@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-5 mt-10 sm:mt-0">
                    <h3 className="text-[#0A033C] font-semibold">Categories</h3>
                    <ul className="leading-10">
                        <li className="cursor-pointer hover:text-brandColor2">MERN Stack Development</li>
                        <li className="cursor-pointer hover:text-brandColor2">MEAN Stack Development</li>
                        <li className="cursor-pointer hover:text-brandColor2">Python Full Stack</li>
                        <li className="cursor-pointer hover:text-brandColor2">PHP Full Stack</li>
                        <li className="cursor-pointer hover:text-brandColor2">UI/UX Designing</li>
                        <li className="cursor-pointer hover:text-brandColor2">Explore More</li>
                    </ul>
                </div>

                <div className="w-full flex flex-col mt-10 sm:mt-0">
                    <h3 className="text-[#0A033C] font-semibold">Links</h3>
                    <ul className="leading-10">
                        <li className="cursor-pointer hover:text-brandColor2">About Us</li>
                        <li className="cursor-pointer hover:text-brandColor2">Blog</li>
                        <li className="cursor-pointer hover:text-brandColor2">Contact Us</li>
                    </ul>
                </div>

                <div className="w-full mt-10 xl:mt-0 flex-nowrap flex flex-col justify-center">
                    <p className="text-[#0A033C] text-sm">Stay up to date with the latest news</p>
                    <div className="bg-white p-1 mt-4 flex flex-nowrap rounded-xl">
                        <input type="text" placeholder="Enter Email..." className="p-2 w-full outline-none border-none rounded-xl" />
                        <button className="bg-brandColor p-2 px-3 rounded-xl text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer
