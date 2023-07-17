import { Metadata } from "next"
import LogoutPage from "./logoutPage"

export const metadata: Metadata = {
    title: "Logout",
    description: "End authentification session"
}

const Logout = () => {
    return(
        <LogoutPage/>
    )
}

export default Logout