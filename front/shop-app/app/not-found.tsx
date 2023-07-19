import Button from "@/components/reusable/button"
import Link from "next/link"

const NotFound = () => {
    return(
        <div className="bg-blue-50 h-screen ">
            <div className="h-[80vh] flex flex-col justify-center items-center gap-5">
                <div className="text-center">
                    <h2 className="text-xl text-blue-600 mb-1">404</h2>
                    <h1 className="text-4xl font-semibold text-blue-600">Page not found</h1>
                </div>
                <Link href="/">
                    <Button
                        size="md"
                        text="Go home"
                        icon="Home"
                    />
                </Link>
            </div>
        </div>
    )
}

export default NotFound