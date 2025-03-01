import Link from "next/link";
import { Logo } from "./logo";

import { VscGithubAlt } from "react-icons/vsc";
import { FaXTwitter, FaUpwork } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { ModeToggle } from "../mode-toggle";
import { SocialItem } from "./social-item";



const routes = [
    {
        label: "Home",
        href: "/"
    },

    {
        label: "About",
        href: "#about"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Portfolio",
        href: "#portfolio"
    },
    {
        label: "Contact",
        href: "#contact"
    },
]

const socials = [
    {
        icon: VscGithubAlt,
        href: "https://github.com/olawoyin1"
    },

    {
        icon: FaXTwitter,
        href: "https://x.com/OlawoyinGbolah3"
    },

    {
        icon: CiLinkedin,
        href: "https://www.linkedin.com/in/olawoyin1/"
    },

    {
        icon: FaUpwork,
        href: "https://www.upwork.com/freelancers/~01c582f3f3e721b2c9"
    }
]

export const Header = () => {
    return (
        <div className="w-full">
            <div className="width-container flex items-center justify-between py-4 w-full">
                <div className="lg:hidden flex items-center justify-between w-full">
                    <Logo />
                    <ModeToggle />
                </div>

                <div className="hidden lg:flex  items-center justify-between w-full">
                    <Logo />
                    <div className="flex items-center justify-center gap-x-4 2xl:gap-x-6 ">
                        {routes.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-neutral-800 dark:text-neutral-200 text-sm xl:text-md 2xl:text-base">
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-x-4 2xl:gap-x-6 ">
                        <div className="flex items-center justify-center gap-x-4 2xl:gap-x-6 text-neutral-800 dark:text-neutral-200">
                            {socials.map(({ icon, href }) => (
                                <SocialItem
                                    key={href}
                                    icon={icon}
                                    href={href} />
                            ))}
                        </div>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}