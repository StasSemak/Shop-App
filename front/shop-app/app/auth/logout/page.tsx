'use client';

import HeroIcon from "@/components/icons/heroicon";
import { logOut } from "@/data/users";
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();

    const clickHandler = () => {
        logOut();
        router.push('/');
    }

    return(
        <div>
            <p className="text-xl mb-2">You surely want to log out?</p>
            <button 
                className="block h-10 w-32 bg-blue-600 rounded-md"
                onClick={clickHandler}
            >
                <div className="flex gap-1 justify-center">
                    <p className="text-white">Log out</p>
                    <HeroIcon icon="ArrowRightOnRectangleIcon" className="text-white"/>
                </div>
            </button>
        </div>
    )
}

export default Logout