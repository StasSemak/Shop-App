import Link from "next/link";
import Icon from "./footerIcon";

const Footer = () => {
    return(
        <footer className="bg-blue-800 w-full h-16 flex-shrink-0 mt-4
            flex items-center justify-between px-5">
            <Link href="https://github.com/StasSemak/Shop-App" className="w-10">
                <Icon/>
            </Link>
            <p className="text-blue-400">Shop App - {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;