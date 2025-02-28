import { BadgeCheck } from "lucide-react";
import { HeadingProps } from "./heading-props";
import { FrontendItems } from "./frontend-items";
import { BackendItems } from "./backend-items";

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


export const Skills = () => {
    return (
        <div className="mt-[90vh] w-full h-auto">
            <div className="width-container 2xl:px-[100px]">
                <HeadingProps
                    heading="Skills"
                    desc="My Technical level"
                    className="" />
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl h-[80vh] py-4 mt-10">
                        <h1 className="text-xl text-center pt-8">Frontend Developer</h1>
                        <div className="grid grid-cols-2  py-6 w-8/12 gap-y-8 gap-x-20 mx-auto ">
                            {frontend.map(({ label, level, icon }) => (
                                <FrontendItems
                                    key={label}
                                    label={label}
                                    icon={icon}
                                    level={level} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-emerald-300 rounded-2xl h-auto py-4 mt-10 w-full">
                        <h1 className="text-xl text-center pt-8">Backend Developer</h1>
                        <div className="grid grid-cols-2  py-6 w-8/12 gap-y-8 gap-x-20 mx-auto ">
                            {backend.map(({ label, level, icon }) => (
                                <BackendItems
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