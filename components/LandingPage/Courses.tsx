"use client";

import CourseImage from "@/public/course.png"
import studentImage from "@/public/student.png"
import Image from "next/image";
import { useState } from "react";

const programmes = ["All Programme", "UI/UX Design", "MERN Stack", "MEAN Stack", "Python Django", "PHP Full Stack", ".NET", "Digital Marketing"]

const courses = [
    {
        id: 1,
        name: "React for Beginners",
        description: "Learn the basics of React, including components, state, and props.",
        price: 99.99,
        discountPercentage: 20,
        totalStudentsJoined: 1200
    },
    {
        id: 2,
        name: "Advanced JavaScript",
        description: "Deep dive into JavaScript ES6+ features, asynchronous programming, and more.",
        price: 149.99,
        discountPercentage: 15,
        totalStudentsJoined: 800,
    },
    {
        id: 3,
        name: "Full-Stack Web Development",
        description: "Build full-stack applications using MERN stack (MongoDB, Express, React, Node).",
        price: 199.99,
        discountPercentage: 10,
        totalStudentsJoined: 600,
    },
    {
        id: 4,
        name: "Python for Data Science",
        description: "Master Python for data analysis, visualization, and machine learning.",
        price: 129.99,
        discountPercentage: 25,
        totalStudentsJoined: 1500,
    },
    {
        id: 5,
        name: "UI/UX Design Fundamentals",
        description: "Understand the basics of user interface and user experience design.",
        price: 79.99,
        discountPercentage: 30,
        totalStudentsJoined: 400,
    },
];

const Courses = () => {

    const [selectedCategory, setCategory] = useState("All Programme")

    return <div className="mt-24">
        <h1 className="text-brandColor2 text-center font-bold text-4xl">Popular Courses</h1>
        <div className="flex justify-center relative">
            <div className="overflow-hidden -z-[1] h-10 right-1/2 translate-x-1/2 -top-3 w-60 absolute">
                <div className="w-[400px] h-[400px] border-2 rounded-full border-brandColor"></div>
            </div>
        </div>
        <div className="flex gap-10 px-2 mt-14 justify-center md:px-10 flex-wrap">
            {
                programmes.map(programme => {

                    return <div key={programme} onClick={() => setCategory(programme)} className={`p-1 px-2 rounded-xl cursor-pointer ${selectedCategory == programme ? `text-white bg-brandColor` : `bg-white/30`}`}>{programme}</div>
                })
            }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 px-2 md:px-10 mt-8 flex-wrap justify-center">
            {
                courses.map(course => {

                    const discountPrice = (course.price - (course.price * course.discountPercentage / 100)).toFixed(2)

                    return <div key={course.id} className="rounded-xl flex-shrink-0 flex flex-col justify-between cursor-pointer hover:shadow-brandShadow p-2 duration-300">
                        <div>
                            <div className="relative flex justify-center">
                                <Image src={CourseImage} alt="course image" className="rounded-xl"/>
                                <div className="bg-white flex gap-2 items-center p-1.5 absolute rounded-full -bottom-4">
                                    <div className="flex">
                                        <Image src={studentImage} alt="students" className="w-6 h-6 rounded-full" />
                                        <Image src={studentImage} alt="students" className="w-6 h-6 rounded-full relative -ms-3"/>
                                        <Image src={studentImage} alt="students" className="w-6 h-6 rounded-full relative -ms-3"/>
                                    </div>
                                    <div>+{course.totalStudentsJoined} students</div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-brandColor truncate">{course.name}</h4>
                                <p className="text-xs text-gray-500">{course.description}</p>
                            </div>
                        </div>
                        <div className="flex mt-3 items-center justify-between">
                            <div className="flex gap-1 text-sm">
                                <div className="line-through text-gray-600">${course.price}</div>
                                <div className="text-brandColor2">${discountPrice}</div>
                            </div>
                            <div>
                                <button className="bg-brandColor text-sm p-1 text-white px-2 rounded-sm">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Courses
