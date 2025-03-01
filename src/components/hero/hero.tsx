"use client"

import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';


export const Hero = () => {
    return (
        <main className="w-full">
            <div className="width-container grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 xl:gap-x-20 2xl:gap-x-10 py-16 md:py-8 h-full lg:py-20 xl:py-28 2xl:px-[100px]">
                <div className="flex items-center justify-center h-[400px] w-[400px] xl:h-[450px] xl:w-[450px] md:h-[350px] md:w-[350px] border border-neutral-300 dark:border-neutral-800 shadow-2xl rounded-full ml-[100px] md:ml-10 duration-300 md:order-1 lg:ml-24 2xl:ml-[250px]">
                    <div className="relative h-[400px] w-[400px] md:h-[350px] md:w-[350px] xl:h-[450px] xl:w-[500px] ">
                        <Image
                            src="/hero.png"
                            alt="Hero Image"
                            fill
                            className="rounded-full absolute" />
                    </div>
                </div>

                <div className="flex items-center justify-center flex-col md:items-start md:justify-start gap-y-3 md:gap-y-2 xl:gap-y-4 mt-4 2xl:w-[100vh]">
                    <h1 className="font-bold text-neutral-400 dark:text-neutral-300 text-4xl md:text-3xl xl:text-6xl">
                        Hey there! 👍
                    </h1>
                    <h1 className="text-5xl font-semibold text-neutral-600 dark:text-neutral-200 md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl ">
                        I&rsquo;m Abraham Henry
                    </h1>
                    <div className="">
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer", 1000,
                                "Certified Software Developer", 1000,
                                "Fullstack web developer", 1000,
                            ]}
                            wrapper="span"
                            style={{ fontSize: "1.5rem", display: "inline-block", color: "grey" }}
                            speed={50}
                            repeat={Infinity} />
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-100 text-md md:text-sm lg:text-sm xl:text-lg w-full">I design, develop, and maintain software applications. My role involves writing code in various programming languages, solving complex problems, and collaborating with teams to deliver functional software that meets user or business needs. </p>

                    <Link href="" className="w-full mt-4">
                        <button className="flex items-center justify-center gap-x-2 text-lg px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-800/80 dark:text-neutral-900 dark:bg-neutral-100  dark:hover:bg-neutral-300 text-neutral-200 w-full xl:w-6/12 xl:text-2xl">
                            <p className="font-thin">View Works</p>
                            <BriefcaseBusiness className="size-6" />
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}