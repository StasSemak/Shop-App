'use client';

import HeroIcon from "@/components/icons/heroicon";
import { getImageUrl } from "@/data/images";
import { UserItem, getLoggedUser, isUserLogged } from "@/data/users";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
    const [user, setUser] = useState<UserItem>({
        id: 0,
        userName: '',
        email: '',
        role: '',
        image: ''
    });

    const isLogged = isUserLogged();
    const router = useRouter();

    useEffect(() => {
        if(!isLogged) router.push('/auth/login');
        setUser(getLoggedUser());
    }, [setUser])

    return(
        <div>
            <div className="flex gap-4">
                <img
                    src={getImageUrl(user.image)}
                    alt={user.userName}
                    className="h-36 w-36 rounded-sm"
                />
                <div>
                    <p className="text-2xl text-blue-500 font-semibold mb-1">{user.userName}</p>
                    <p className="text-sm mb-2">{user.role}</p>
                    <p className="mb-4">{user.email}</p>
                    <Link href='/auth/logout'>
                        <div className="flex items-center">
                            <p className="text-blue-500">Log out</p>
                            <HeroIcon icon="ArrowRightOnRectangleIcon" className="text-blue-500"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile; 