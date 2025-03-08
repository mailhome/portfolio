import { CiLinkedin } from "react-icons/ci";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { SocialItem } from "./social-item";

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
export const Social = () => {
    return (
        <div className="flex items-center justify-center gap-x-6 2xl:gap-x-6 text-neutral-500 dark:text-neutral-200">
            {socials.map(({ icon, href }) => (
                <SocialItem
                    key={href}
                    icon={icon}
                    href={href} />
            ))}
        </div>
    );
}