import React from "react";

type Props = {
    children: React.ReactNode;
}
export const MaxWidthContainer = ({ children }: Props) => {
    return (
        <div className="px-8 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-2xl mx-auto">
            {children}
        </div>
    );
}