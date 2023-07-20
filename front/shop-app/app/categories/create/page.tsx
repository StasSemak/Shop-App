import { Metadata } from "next"
import CreateForm from "./createForm"
import Redirect from "@/components/redirect"

export const metadata: Metadata = {
    title: "Admin Panel - Create category",
    description: "Create new category"
}

const CreateCategory = () => {
    return(
        <>
            <Redirect/>
            <CreateForm/>
        </>
    )
}

export default CreateCategory