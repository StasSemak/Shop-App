'use client';

import { getLoggedUser, isUserLogged } from "@/data/users";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    type: "isLogged" | "isAdmin"
}

const Redirect = ({type}:Props) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        if(isUserLogged()){
            setIsLogged(true)
            setIsAdmin((getLoggedUser().role === "Admin"))
        } 
    })

    const router = useRouter();

    if(type === "isAdmin" && !isAdmin) notFound();
    if(type === "isLogged" && !isLogged) router.push("/login");

    return(
        <></>
    )
}

export default Redirect