import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";


type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col   dark:bg-black text-black bg-white transition-all duration-300">
            <Header />
            <div className="flex items-start flex-col justify-start flex-1 h-full">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;