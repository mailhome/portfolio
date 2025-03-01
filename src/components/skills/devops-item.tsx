import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon,
    label: string;
    level: string;
}
export const DevopsItems = ({
    label,
    icon: Icon,
    level }: Props) => {

    return (
        <div className="flex justify-start items-start gap-x-3">
            <Icon className="text-neutral-700 mt-2 lg:mt-1 size-5 md:size-6 lg:size-5" />
            <div className="flex gap-y-0 flex-col items-start justify-start -pt-1 lg:text-md ">
                <p className="font-semibold text-lg mt:text-xl">{label}</p>
                <span className="text-neutral-500 lg:text-sm">{level}</span>
            </div>
        </div>
    );
}