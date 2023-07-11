import Link from "next/link";
import Navbar from "./headerNavbar";

const Header = () => {
    return(
        <header className="h-20 bg-blue-600 text-white flex justify-between
            items-center px-5 flex-shrink-0">
            <h1 className="text-2xl">
                <Link href="/">
                    Shop App
                </Link>
            </h1>
            <Navbar/>
        </header>
    );
}

export default Header;