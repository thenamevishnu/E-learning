import Image from "next/image"
import whySHould from "@/public/why-should-model.png"

const WhyShould = () => {
    return <div className="mt-20 px-2 md:px-10">
        <div className="bg-[#DF1C25] rounded-xl w-full h-96 relative">
            <Image src={whySHould} alt="why should" className="h-[120%] absolute bottom-0 right-0 object-contain"/>
        </div>
    </div>
}

export default WhyShould
