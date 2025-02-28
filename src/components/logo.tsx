import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center justify-center text-neutral-800 dark:text-neutral-200 gap-x-1">
                <FaRegEnvelope className="pt-1 size-4 lg:size-5 " />
                <p className="text-base lg:text-lg">mail.henry@gmail.com</p>
            </div>
        </Link>
    );
}