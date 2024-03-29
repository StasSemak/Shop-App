'use client';

import HeroIcon from "@/components/icons/heroicon";
import { imageUrl } from "@/data/images";
import { UserItem, getLoggedUser, isUserLogged } from "@/data/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"

const ProfilePage = () => {
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
        if(!isLogged) router.push('/login');
        const user = getLoggedUser();
        if(user) setUser(user);
    }, [setUser])

    return(
        <div className="w-full lg:w-2/3 mx-auto">
            <div className="flex gap-4 mb-3 xxs:flex-row flex-col">
                <Image
                    src={imageUrl(user.image)}
                    alt={user.userName}
                    className="rounded-sm"
                    width={144}
                    height={144}
                />
                <div>
                    <p className="text-2xl text-blue-600 font-semibold mb-1">{user.userName}</p>
                    <p className="text-sm mb-2">{user.role}</p>
                    <p className="mb-4">{user.email}</p>
                    <Link href='/logout'>
                        <div className="flex items-center">
                            <p className="text-blue-600">Log out</p>
                            <HeroIcon icon="ArrowRightOnRectangle" className="text-blue-600"/>
                        </div>
                    </Link>
                </div>
            </div>
            {user.role === "Admin" &&
                <Link href='/profile/adminpanel'>
                    <div className="flex items-center">
                        <p className="text-blue-600">Admin panel</p>
                        <HeroIcon icon="Cog6Tooth" className="text-blue-600"/>
                    </div>
                </Link>
            }
        </div>
    )
}

export default ProfilePage; 