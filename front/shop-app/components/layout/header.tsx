import Link from "next/link";

const Header = () => {
    return(
        <header className="h-20 bg-blue-600 text-white flex justify-between
            items-center px-5">
            <h1 className="text-2xl">
                <Link href="/">
                    Shop App
                </Link>
            </h1>
            <nav className="flex gap-3">
                <Link href="/basket">Basket</Link>
                <Link href="/auth/login">Profile</Link>
            </nav>
        </header>
    );
}

export default Header;