import Image from "next/image"
import trainers from "@/assets/images/trainers.svg"
import benefitIcon1 from "@/assets/icons/Benefit-Icon1.svg"
import benefitIcon2 from "@/assets/icons/Benefit-Icon2.svg"
import benefitIcon3 from "@/assets/icons/Benefit-Icon3.svg"
import benefitIcon4 from "@/assets/icons/Benefit-Icon4.svg"

const Trainers = () => {
    return <div className="px-2 md:px-10 my-10">
        <div className="flex flex-col gap-10 lg:flex-row">
            <div  className="w-full flex justify-center">
                <Image src={trainers} alt="Trainers" />
            </div>
            <div className="w-full">
                <button className="text-brandColor bg-brandSecondary rounded-md p-1 px-3">Training</button>
                <ul className="flex mt-10 gap-5 flex-col">
                    <li className="flex gap-3 items-center">
                        <Image src={benefitIcon1} alt="benefit icon 1" width={25} height={25}/> 
                        Access to a customizable Trainer ID card for identification and branding.
                    </li>
                    <li className="flex gap-3 items-center">
                        <Image src={benefitIcon2} alt="benefit icon 2" width={25} height={25}/> 
                        Trainers have a dedicated Podium Space to deliver lessons without distractions from participant activities.
                    </li>
                    <li className="flex gap-3 items-center">
                        <Image src={benefitIcon3} alt="benefit icon 3" width={25} height={25}/> 
                        Co-trainers and guest speakers can be spotlighted and managed effortlessly during sessions.
                    </li>
                    <li className="flex gap-3 items-center">
                        <Image src={benefitIcon4} alt="benefit icon 4" width={25} height={25}/> 
                        Trainers can efficiently manage session resources and materials for streamlined delivery.
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Trainers
