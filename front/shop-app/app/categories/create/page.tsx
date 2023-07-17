import { Metadata } from "next"
import CreateForm from "./createForm"

export const metadata: Metadata = {
    title: "Admin Panel - Create category",
    description: "Create new category"
}

const CreateCategory = () => {
    return(
        <CreateForm/>
    )
}

export default CreateCategory