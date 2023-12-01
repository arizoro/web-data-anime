import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const NotFound = () => {
    
    return (
        <div className="flex min-h-screen max-w-xl mx-auto justify-center items-center" >
            <div className="flex justify-center items-center p-4 flex-col">
                <FileSearch size={30} className="text-color-accent "/>
                <h1 className="text-color-accent text-4xl font-bold" >Not Found</h1>
            <Link href="/" className="text-color-primary hover:text-color-accent underline transition-all" >
                Kembali
            </Link>
            </div>
        </div>
    )
}

export default NotFound