import { authUserSesion } from "@/libs/authUser"
import Link from "next/link"


const UserActionBtn = async() => {

    const user = await authUserSesion()

    const userLabel = user ? "Log Out" : "Login"
    const userAction = user ? "/api/auth/signout" : "/api/auth/signin" 

    return (
        <div className="flex  justify-start items-center">
            {user ? <Link href="/user/dashboard" className="text-center mx-3 " >Dashboard</Link> : null }
            <Link href={userAction} className="flex  justify-center items-center bg-color-secondary text-color-accent p-1 rounded w-20" >{userLabel}</Link>
            
        </div>
    )
}

export default UserActionBtn