import benefitIcon1 from "@/assets/icons/Benefit-Icon1.svg"
import benefitIcon2 from "@/assets/icons/Benefit-Icon2.svg"
import benefitIcon3 from "@/assets/icons/Benefit-Icon3.svg"
import benefitIcon4 from "@/assets/icons/Benefit-Icon4.svg"
import idCardStudent from "@/assets/icons/Id-card-student.svg"
import studentQr from "@/public/qrCode.png"
import sign from "@/public/signature.png"
import Image from "next/image"

const Benefits = () => {
    return <div className="flex mt-20 px-2 md:px-10 flex-col-reverse lg:flex-row">
        <div className="w-full">
            <p className="text-brandColor">Benefits</p>
            <ul className="flex mt-10 gap-5 flex-col">
                <li className="flex gap-3 items-center"><Image src={benefitIcon1} alt="benefit icon 1" width={25} height={25}/> Access to a personalized Student ID card.</li>
                <li className="flex gap-3 items-center"><Image src={benefitIcon2} alt="benefit icon 2" width={25} height={25}/> Teachers have a dedicated Podium Space to focus and avoid distractions from the grid view.</li>
                <li className="flex gap-3 items-center"><Image src={benefitIcon3} alt="benefit icon 3" width={25} height={25}/> TAs and presenters can be spotlighted and easily brought to the forefront of the classroom.</li>
                <li className="flex gap-3 items-center"><Image src={benefitIcon4} alt="benefit icon 4" width={25} height={25}/> Teachers can view all students and class data seamlessly in one unified interface.</li>
            </ul>
        </div>
        <div className="w-full flex justify-center">
            <div className="bg-brandSecondary flex flex-col sm:flex-row gap-5">
                <div className="w-56 text-sm bg-white flex flex-col items-center p-3 rounded-md">
                    <Image src={idCardStudent} alt="Id Card" width={120} className="" />
                    <div className="text-center mt-3">
                        <h4>John Doe</h4>
                        <p>ID: COMP002846</p>
                        <p>mail.sample@gmail.com</p>
                        <p>+91 8943 003 388</p>
                    </div>
                    <div className="flex gap-2 items-center mt-3">
                        <Image src={studentQr} alt="student qr" width={50} height={50} quality={100}/>
                        <div className="text-xs flex flex-col">
                            <div>CompanyInfo.com</div>
                            <div className="flex gap-2">
                                <div>Ig | sample</div>
                                <div>Li | sample</div>
                            </div>
                            <div>Kozhikode, Kerala</div>
                        </div>
                    </div>
                </div>
                <div className="w-56  bg-white  p-3 rounded-md flex flex-col items-center">
                    <Image src={studentQr} alt="student qr" width={170} height={170} quality={100} />
                    <p>Scan to get student info</p>
                    <div className="text-xs mt-4">John Doe / COMP002846</div>
                    <div className="flex gap-1 items-center mt-3">
                        <div>Signature: </div> <Image src={sign} alt="sign" className="w-20" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Benefits
