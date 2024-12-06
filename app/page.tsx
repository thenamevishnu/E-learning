import Benefits from "@/components/LandingPage/Benefits"
import Courses from "@/components/LandingPage/Courses"
import Footer from "@/components/LandingPage/Footer"
import HeroSection from "@/components/LandingPage/HeroSection"
import NavBar from "@/components/LandingPage/NavBar"
import Trainers from "@/components/LandingPage/Trainers"
import { Fragment } from "react"

const Home = () => {
    return <Fragment>
        <NavBar />
        <HeroSection />
        <Courses />
        <Benefits />
        <Trainers />
        <Footer />
    </Fragment>
}

export default Home