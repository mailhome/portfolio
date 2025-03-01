import { cn } from "@/lib/utils";

type Props = {
    heading: string;
    desc: string;
    className?: string;
}
export const HeadingProps = ({ heading, desc, className }: Props) => {
    return (
        <div className={cn("flex flex-col items-center justify-center gap-y-2 w-full", className)}>
            <h1 className="text-3xl font-bold md:text-3xl lg:text-3xl xl:text-4xl text-neutral-800 dark:text-neutral-200">{heading}</h1>
            <p className="text-xl md:text-xl lg:text-2xl xl:text-2xl text-neutral-600 dark:text-neutral-300">{desc}</p>
        </div>
    );
}