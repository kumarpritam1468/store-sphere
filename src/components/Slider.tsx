"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Slider = () => {
    const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);

    const slides = [
        {
            id: 1,
            title: "Summer Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
            id: 2,
            title: "Winter Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-pink-50 to-blue-50",
        },
        {
            id: 3,
            title: "Spring Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
        },
    ];

    return (
        <section className=" h-[calc(100svh-80px)] overflow-hidden">
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                                {slide.description}
                            </h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                                {slide.title}
                            </h1>
                            <Link href={slide.url}>
                                {/* <button className="rounded-md bg-black text-white py-3 px-4 ">
                                    SHOP NOW
                                </button> */}
                                <button className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                                    <span className="px-3.5 py-3 text-white bg-main-red group-hover:bg-[#e04564] flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </span>
                                    <span className="pl-4 pr-5 py-2.5">Shop Now</span>
                                </button>
                            </Link>
                        </div>
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image
                                src={slide.img}
                                alt=""
                                fill
                                sizes="100%"
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""} transition-all duration-300 ease-in-out`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                    >
                        {current === index && (
                            <div className="size-1.5 border border-white bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Slider