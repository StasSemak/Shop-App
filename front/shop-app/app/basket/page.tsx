import { Metadata } from "next";
import BasketPage from "./basketPage";

export const metadata: Metadata = {
    title: "Basket",
    description: "List of items in the basket"
}

const Basket = () => {
    return(
        <BasketPage/>
    )
}

export default Basket;