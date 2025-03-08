"use client"

import { LoaderCircle } from "lucide-react";
import { HeadingProps } from "../header/heading-props";
import { PortfolioProps } from "./portfolio-props";

export const Portfolio = () => {
    return (
        <div className="w-full 2xl:mt-40">
            <div className="width-container mt-16">
                <HeadingProps
                    heading="Portfolio"
                    desc="My Recent Works" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8 mt-8">
                    <PortfolioProps
                        imgSrc="/redmi.jpeg"
                        headingProps="Redmi Note 9s Control Panel"
                        desc="Redmi Note 9s control panel craeted with HTML, CSS and JAVASCRIPT."
                        href="/redmi"

                        alt="Redmi Note 9s control panel craeted with HTML, CSS and JAVASCRIPT." />
                    <PortfolioProps
                        imgSrc="/landing-page-u.png"
                        headingProps="U-Secured Landing Page"
                        desc="Safety tech web application."
                        href="/landing-page"
                        className="pb-8"
                        alt="U-Secured Landing Page" />
                    <PortfolioProps
                        imgSrc="/pizza-rush.jpeg"
                        headingProps="Pizza Rush Website"
                        desc="Alx Portfolio Project | Pizza Deliver Website"
                        className="pb-8"
                        href="/pizza-rush"
                        alt="Pizza Rush Website" />
                </div>

                <div onClick={() => { }} className="w-full mt-4">
                    <button className="flex items-center justify-center gap-x-2 text-lg px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-800/80 dark:text-neutral-900 dark:bg-neutral-100  dark:hover:bg-neutral-300 text-neutral-200 w-full md:w-3/12 xl:w-2/12 xl:text-2xl mx-auto">
                        <p className="text-xl">Load</p>
                        <LoaderCircle className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}