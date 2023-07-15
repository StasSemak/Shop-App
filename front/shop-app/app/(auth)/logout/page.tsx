'use client';

import Button from "@/components/reusable/button";
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
            <Button
                size="md"
                text="Log out"
                icon="ArrowRightOnRectangle"
                onClickAction={clickHandler}
            />
        </div>
    )
}

export default Logout