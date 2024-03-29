import HeroIcon from "@/components/icons/heroicon";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Register - Success",
    description: "Account created successfully"
}

const Registered = () => {
    return(
        <div className="flex flex-col items-center mt-5 gap-1">
            <HeroIcon icon="CheckCircle" className="text-blue-600 h-12 w-12"/>
            <p className="text-center text-2xl font-bold text-blue-600">
                Registered successfully
            </p>
            <div className="flex gap-2 text-blue-600">
                <Link href="/login">
                    <p className="w-20 text-right">Login</p>
                </Link>
                <p>|</p>
                <Link href="/">
                    <p className="w-20">Homepage</p>
                </Link>
            </div>
        </div>
    )
}

export default Registered;