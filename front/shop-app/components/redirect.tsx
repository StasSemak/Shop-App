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
        setIsLogged(isUserLogged());
        if(isUserLogged()){
            const user = getLoggedUser();
            if(user) setIsAdmin((user.role === "Admin"))
        } 
    }, [setIsAdmin, setIsLogged])

    const router = useRouter();

    if(type === "isAdmin" && !isAdmin) notFound();
    if(!isLogged) router.push("/login");

    return(
        <></>
    )
}

export default Redirect