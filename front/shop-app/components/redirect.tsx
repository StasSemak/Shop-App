'use client';

import { getLoggedUser, isUserLogged } from "@/data/users";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const Redirect = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        if(isUserLogged()) setIsAdmin((getLoggedUser().role === "Admin"))
    })

    if(!isAdmin) notFound();

    return(
        <></>
    )
}

export default Redirect