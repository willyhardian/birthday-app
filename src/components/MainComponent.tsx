import ConfettiComponent from "@/components/ConfettiComponent";
import Wishes from "@/components/Wishes";
import Image from "next/image";
import cover from '@/assets/cover.png'
export default function MainComponent() {
    return (
        <>
            <h1 className="text-5xl font-bold text-yellow-600 text-center my-5">HAPPY BIRTHDAY WIWIN</h1>
            <div className={`bg-[url('/balloon.png')] bg-repeat bg-opacity-50`}>
                <Image src={cover} alt="cover" width={0} height={0} className="mx-auto border-8 w-[60%] sm:w-1/4 border-orange-500" />
                <ConfettiComponent />

                <Wishes />
            </div>
        </>
    );
} 