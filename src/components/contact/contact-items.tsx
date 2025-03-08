import Link from "next/link";
import { IconType } from "react-icons/lib";

type Props = {
    href: string;
    icon: IconType;
    label: string;
    details: string;
}
export const ContactItems = ({
    href,
    icon: Icon,
    details
}: Props) => {
    return (
        <div className="flex items-start justify-start gap-6 shadow-sm border-b border-neutral-200 dark:border-neutral-600  h-20 py-4 rounded-lg w-[300px]">
            <Icon className="text-neutral-600 dark:text-white size-8" />
            <div className="flex flex-col items-start justify-start gap-y-1">
                <p className="text-md dark:text-white">{details}</p>
                <Link href={href} className="text-neutral-700 dark:text-white" passHref>
                    Write Me
                </Link>
            </div>
        </div>
    );
}