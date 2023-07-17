import { Metadata } from "next";
import ProfilePage from "./profilePage";

export const metadata: Metadata = {
    title: "Profile",
    description: "Logged user info"
}

const Profile = () => {
    return(
        <ProfilePage/>
    )
}

export default Profile; 