import { BadgeCheck } from "lucide-react";
import { HeadingProps } from "./heading-props";
import { FrontendItems } from "./frontend-items";
import { BackendItems } from "./backend-items";
import { DevopsItems } from "./devops-item";

const frontend = [
    {
        label: "HTML",
        icon: BadgeCheck,
        level: "Expert"
    },
    {
        label: "CSS",
        level: "Expert",
        icon: BadgeCheck,
    },
    {
        label: "JavaScript",
        level: "Expert",
        icon: BadgeCheck,
    },
    {
        label: "ReactJs",
        level: "Expert",
        icon: BadgeCheck,
    },
    {
        label: "Bootstrap",
        level: "Expert",
        icon: BadgeCheck,
    },
    {
        label: "Tailwind CSS",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Typescript",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Git",
        level: "Expert",
        icon: BadgeCheck,
    },
    {
        label: "Github",
        level: "Expert",
        icon: BadgeCheck,
    },
    {
        label: "NextJs",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Vue",
        level: "Intermediate",
        icon: BadgeCheck,
    },
]

const backend = [
    {
        label: "Python",
        icon: BadgeCheck,
        level: "Intermediate"
    },
    {
        label: "Node",
        level: "Intermdiate",
        icon: BadgeCheck,
    },
    {
        label: "Django",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Flask",
        level: "Inermediate",
        icon: BadgeCheck,
    },

    {
        label: "My SQL",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Mongo DB",
        level: "Intermediate",
        icon: BadgeCheck,
    },

]


const devops = [
    {
        label: "Bash",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Network",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Script",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Webstack",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Security",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "Powershell",
        level: "Intermediate",
        icon: BadgeCheck,
    },
    {
        label: "C",
        level: "Intermediate",
        icon: BadgeCheck,
    },
]


export const Skills = () => {
    return (
        <div className="mt-[90vh] md:mt-56 lg:mt-80 w-full h-auto">
            <div className="width-container 2xl:px-[100px]">
                <HeadingProps
                    heading="Skills"
                    desc="My Technical level"
                    className="" />
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-x-10">
                    <div className="bg-white rounded-2xl h-[80vh] py-4 mt-10">
                        <h1 className="text-xl text-center pt-8">Frontend Developer</h1>
                        <div className="grid grid-cols-2  py-6 w-8/12 md:w-8/12 lg:w-9/12 gap-y-8 gap-x-20  md:gap-x-10 mx-auto ml-28 md:ml-48 lg:ml-12 lg:gap-x-4">
                            {frontend.map(({ label, level, icon }) => (
                                <FrontendItems
                                    key={label}
                                    label={label}
                                    icon={icon}
                                    level={level} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl h-[80vh] py-4 mt-10 w-full">
                        <h1 className="text-xl text-center pt-8">Backend Developer</h1>
                        <div className="grid grid-cols-2  py-6 w-8/12 md:w-8/12 lg:w-9/12 gap-y-8 gap-x-20  md:gap-x-10 mx-auto ml-28 md:ml-40 lg:ml-8 lg:gap-x-4">
                            {backend.map(({ label, level, icon }) => (
                                <BackendItems
                                    key={label}
                                    label={label}
                                    icon={icon}
                                    level={level} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl h-[80vh] py-4 mt-10 w-full">
                        <h1 className="text-xl text-center pt-8">System Engineering & DevOps</h1>
                        <div className="grid grid-cols-2  py-6 w-8/12 md:w-8/12 lg:w-9/12 gap-y-8 gap-x-20  md:gap-x-10 mx-auto ml-28 md:ml-40 lg:ml-8 lg:gap-x-4">
                            {devops.map(({ label, level, icon }) => (
                                <DevopsItems
                                    key={label}
                                    label={label}
                                    icon={icon}
                                    level={level} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}