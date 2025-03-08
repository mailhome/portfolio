
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
    imgSrc: string;
    alt: string;
    headingProps: string;
    desc: string;
    href: string;
    className?: string
}
export const PortfolioProps = ({
    imgSrc,
    headingProps,
    desc,
    href,
    alt,
    className
}: Props) => {
    return (
        <div className="w-full h-[400px]">
            <div className="relative w-full h-60">
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    className="absolute rounded-t-2xl" />
            </div>
            <div className={cn("flex flex-col bg-slate-200 dark:bg-white  items-start justify-start py-2 px-8 gap-y-2 shadow-lg rounded-b-2xl", className)}>
                <h1 className="font-bold text-xl text-neutral-900">{headingProps}
                </h1>
                <p className="text-muted-foreground text-sm">{desc}</p>
                <Link href={href} className="text-neutral-700 dark:text-neutral-100 flex items-start justify-start gap-x-2 hover:underline underline-offset-4 decoration-neutral-700">
                    View
                </Link>
            </div>
        </div>
    );
}