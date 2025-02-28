import Link from "next/link";
import { IconType } from "react-icons/lib";

type Props = {
    icon: IconType;
    href: string;
}
export const SocialItem = ({
    icon: Icon,
    href
}: Props) => {
    return (
        <Link href={href} passHref>
            <Icon className="size-5" />
        </Link>
    );
}