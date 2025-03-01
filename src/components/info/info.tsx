import Image from "next/image";
import { Award, BriefcaseBusiness, FileText, Headset } from "lucide-react";
import Link from "next/link";
import { HeadingProps } from "../header/heading-props";
import { AboutItem } from "../about/about-item";

const about = [
    {
        icon: Award,
        label: "Experience",
        desc: "3 years working",
    },

    {
        icon: BriefcaseBusiness,
        label: "Completed",
        desc: "20+ Projects",
    },

    {
        icon: Headset,
        label: "Support",
        desc: "Online 24/7",
    },
]

export const Info = () => {
    return (
        <div className="w-full mt-0 h-[80vh] 2xl:px-[100px]">
            <div className="width-container">
                <HeadingProps
                    heading="About Me"
                    desc="My Introduction" />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-6 gap-x-6 lg:gap-x-12">
                    <div className="relative h-[80vh] w-full md:h-[56vh] lg:h-[80vh] xl:h-[90vh]">
                        <Image
                            alt="About Image"
                            src="/about-image.jpg"
                            fill
                            className="absolute rounded-lg" />
                    </div>
                    <div className="flex items-center  w-full flex-col lg:items-start lg:justify-start justify-center gap-y-5 ">
                        <div className="w-full grid grid-cols-3 gap-x-4">
                            {about.map(({ icon, label, desc }) => (
                                <AboutItem
                                    key={desc}
                                    icon={icon}
                                    label={label}
                                    desc={desc} />
                            ))}
                        </div>
                        <p className="text-sm tracking-wider text-neutral-800 lg:text-md lg:tracking-widest xl:text-md dark:text-neutral-100">My name is Henry Abraham, and for the past 3 years, I’ve dedicated myself to the craft of software engineering. I am a proud graduate of the ALX Africa Software Engineering program, where I honed my skills and built a strong foundation in programming. My passion lies in developing software that not only meets users&rsquo; needs but also exceeds their expectations.</p>



                        <p className="text-sm tracking-wider text-neutral-800 lg:text-md lg:tracking-widest xl:text-md dark:text-neutral-100">I’m skilled in technologies like React.js, C Programming, TypeScript, Python, and APIs, which have enabled me to work on a variety of projects with unique challenges and learning opportunities. I enjoy being part of a team where collaboration and continuous improvement are the norms, as I believe the best ideas and solutions come from shared effort. I’m eager to bring my expertise to a new opportunity where I can create impactful software, learn new things, and make a difference.</p>
                        <Link download={true} href="/newsletter.pdf" className="w-full">
                            <button className="flex items-center justify-center gap-x-2 text-lg px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-800/80 dark:text-neutral-900 dark:bg-neutral-100  dark:hover:bg-neutral-300  text-neutral-200 w-full xl:w-6/12 xl:text-2xl">
                                <p className="font-thin">Download CV</p>
                                <FileText className="size-6" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}