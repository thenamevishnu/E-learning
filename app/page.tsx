import Benefits from "@/components/Benefits"
import Courses from "@/components/Courses"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import NavBar from "@/components/NavBar"
import Trainers from "@/components/Trainers"
import WhyShould from "@/components/WhyShould"
import { Fragment } from "react"

const Home = () => {
    return <Fragment>
        <NavBar />
        <HeroSection />
        <Courses />
        <Benefits />
        <Trainers />
        {/* <WhyShould /> */}
        <Footer />
    </Fragment>
}

export default Home