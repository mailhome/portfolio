import { LucideIcon } from "lucide-react";

type Props = {
    desc: string;
    icon: LucideIcon;
    label: string;
}
export const AboutItem = ({ desc, icon: Icon, label }: Props) => {
    return (
        <div className="w-full bg-slate-200/50 dark:bg-neutral-100 h-auto rounded-lg py-6 xl:py-8 duration-200 transition-all slide-in-from-right-10">
            <div className="flex gap-y-2 items-center justify-center flex-col ">
                <Icon className="size-6 xl:size-8 text-neutral-600" />
                <p className="text-lg xl:text-2xl text-black">{label}</p>
                <p className="text-md xl:text-lg text-neutral-500">{desc}</p>
            </div>
        </div>
    );
}