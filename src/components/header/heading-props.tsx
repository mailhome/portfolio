import { cn } from "@/lib/utils";

type Props = {
    heading: string;
    desc: string;
    className?: string;
}
export const HeadingProps = ({ heading, desc, className }: Props) => {
    return (
        <div className={cn("flex flex-col items-center justify-center gap-y-2 w-full", className)}>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-3xl xl:text-3xl text-neutral-800 dark:text-neutral-200">{heading}</h1>
            <p className="text-md md:text-lg lg:text-xl xl:text-sm text-neutral-400 dark:text-neutral-300">{desc}</p>
        </div>
    );
}