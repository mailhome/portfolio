import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon,
    label: string;
    level: string;
}
export const FrontendItems = ({
    label,
    icon: Icon,
    level }: Props) => {

    return (
        <div className="flex justify-start items-start gap-x-3">
            <Icon className="text-neutral-700 mt-2 size-5" />
            <div className="flex gap-y-0 flex-col items-start justify-start -pt-1">
                <p className="font-semibold text-lg ">{label}</p>
                <span className="text-neutral-500">{level}</span>
            </div>
        </div>
    );
}