import HeroIcon from "@/components/icons/heroicon"
import Redirect from "@/components/redirect"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Manage site content"
} 

const AdminPanel = async () => {
    return(
        <>
            <div className="flex flex-col gap-3 w-full lg:w-2/3 mx-auto">
                <Link href='adminpanel/categories'>
                    <MenuItem caption="Categories"/>
                </Link>
                <Link href='adminpanel/products'>
                    <MenuItem caption="Products"/>
                </Link>
            </div>
            <Redirect/>
        </>
    )
}

const MenuItem = ({caption}:{caption:string}) => {
    return(
        <div className="h-16 border-4 border-blue-600 rounded-md transition-all
            flex gap-3 items-center group hover:bg-blue-600">
            <div className="h-full border-r-4 border-blue-600 w-16
                flex items-center justify-center bg-blue-600">
                <HeroIcon icon="Cog6Tooth" className="text-white w-9 h-9
                    transform-none group-hover:rotate-[30deg] transition-transform"/>
            </div>
            <p className="text-xl text-blue-600 font-semibold
                group-hover:text-white">{caption}</p>
        </div>
    )
}

export default AdminPanel