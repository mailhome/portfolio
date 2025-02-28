import { Info } from "./info";
import { Skills } from "./skills";

export const MainContent = () => {
    return (
        <main className="h-full">
            <Info />
            <Skills />
        </main>
    );
}