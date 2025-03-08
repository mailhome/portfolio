import { Social } from "../header/social";


export const Footer = () => {
    return (
        <div className="bottom-0 w-full mt-20 ">
            <div className="border-t border-neutral-200 dark:border-neutral-700 dark:text-white text-neutral-500 h-auto w-full py-8">
                <div className="width-container flex flex-col items-center justify-center gap-4">
                    <h1 className="font-bold  text-2xl text-neutral-800 dark:text-neutral-200">Henry</h1>
                    <Social />
                    <p className="text-sm text-neutral-500">&copy; Abraham Henry. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}