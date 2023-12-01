import { authUserSesion } from "@/libs/authUser"
import Image from "next/image"
import Link from "next/link"



const page = async() => {
    const user = await authUserSesion()

    return(
        <div className=" text-color-primary text-2xl flex flex-col justify-center items-center mt-12 " >
            <Image src={user.image} width={250} height={250} className="rounded" />
            <h1 className="text-center mt-3 font-bold">Hello.. Welcome Back {user.name}</h1>
            <div className="flex flex-wrap items-center py-6 gap-4">
                <Link href="/user/dashboard/collection" 
                className=" bg-color-accent text-color-dark py-2 px-4 text-xl "
                >My Collection</Link>

                <Link href="/user/dashboard/comment" 
                className=" bg-color-accent text-color-dark py-2 px-4 text-xl "
                >My Comment</Link>
                
            </div>
        </div>
    )
}

export default page
