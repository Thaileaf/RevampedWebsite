import Image from "next/image";
import AnimatedBox from './AnimatedBox';

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Left-positioned AnimatedBox */}
            <div id={"ContainerAnim"} className="fixed inset-0 flex items-center justify-start z-10 pl-8 pr-8 w-screen h-screen">
                <AnimatedBox/>
            </div>
        </div>
    );
}