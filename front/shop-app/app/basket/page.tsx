import { Metadata } from "next";
import BasketPage from "./basketPage";
import Redirect from "@/components/redirect";

export const metadata: Metadata = {
    title: "Basket",
    description: "List of items in the basket"
}

const Basket = () => {
    return(
        <>
            <Redirect type="isLogged"/>
            <BasketPage/>
        </>
    )
}

export default Basket;