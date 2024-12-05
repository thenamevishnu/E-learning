import HeroStudent from "@/assets/images/hero-student.png"
import CalendarIcon from "@/assets/icons/calendar.svg"
import statIcon from "@/assets/icons/stat.svg"
import playIcon from "@/assets/icons/play.svg"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

const HeroSection = () => {
    return <div className="bg-brandSecondary h-[400px] flex gap-3 relative">
        <div className="w-full flex gap-3 flex-col justify-center ps-10">
            <div className="bg-white rounded-lg w-full max-w-[180px] p-1 text-center">Never stop learning</div>
            <h1 className="text-[#0B7077] z-[1] text-2xl sm:text-4xl md:text-5xl font-bold">Grow up your skills by online courses with Onlearning</h1>
            <div>
                <button className="p-3 text-white bg-brandColor2 rounded-lg">EXPLORE PATH</button>
            </div>
        </div>
        <div className="w-full justify-center hidden md:flex">
            <div className="relative">
                <Image src={HeroStudent} alt="hero student" className="w-[350px] object-contain h-[400px]"/>
                <div className="absolute -left-[100px] top-[220px] p-2 px-4 gap-4 flex items-center bg-white rounded-xl">
                    <div>
                        <Image src={CalendarIcon} alt="calender icon" width={40} height={40} />
                    </div>
                    <div>
                        <div className="text-xl font-bold">250K</div>
                        <div>Assisted Students</div>
                    </div>
                </div>
                <Image src={statIcon} alt="stat icon" className="absolute right-[30px] top-[80px]" width={90} height={90}/>
            </div>
        </div>
        <div className="bg-brandSecondary -z-[1] w-36 h-36 flex justify-center items-center -bottom-16 left-1/2 -translate-x-1/2 rounded-full absolute"></div>
        <div className="bg-[#0B7077] text-white flex-col w-28 h-28 flex justify-center items-center -bottom-12 left-1/2 -translate-x-1/2 rounded-full absolute">
            <Image src={playIcon} alt="play icon" className="relative left-1.5" width={40} height={40} />
        </div>
    </div>
}

export default HeroSection
