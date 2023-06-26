'use client';

import Link from "next/link"
import HeroIcon from "../icons/heroicon"
import { isUserLogged } from "@/data/users";

const Navbar = () => {
    const isLogged = isUserLogged();

    return(
        <nav className="flex gap-5">
            <Link href="/search">
                <HeroIcon icon="MagnifyingGlassIcon" className="text-white"/>
            </Link>
            <Link href="/basket">
                <HeroIcon icon="ShoppingCartIcon" className="text-white"/>
            </Link>
            <Link href={`/auth/${(isLogged ? "profile" : "login")}`}>
                <HeroIcon icon="UserIcon" className="text-white"/>
            </Link>
        </nav>
    )
}

export default Navbar