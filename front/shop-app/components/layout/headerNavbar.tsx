'use client';

import Link from "next/link"
import HeroIcon from "../icons/heroicon"
import { isUserLogged } from "@/data/users";

const Navbar = () => {
    const isLogged = isUserLogged();

    return(
        <nav className="flex gap-5">
            <Link href="/search">
                <HeroIcon icon="MagnifyingGlass" className="text-white"/>
            </Link>
            <Link href="/basket">
                <HeroIcon icon="ShoppingCart" className="text-white"/>
            </Link>
            <Link href={`/${(isLogged ? "profile" : "login")}`}>
                <HeroIcon icon="User" className="text-white"/>
            </Link>
        </nav>
    )
}

export default Navbar