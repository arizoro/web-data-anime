"use client"
import {ArrowFatLineLeft} from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()
    const handleBack = (e) => {
        e.preventDefault()
        router.back()
    }

    return(
        <div className="flex justify-between" >
            <button onClick={handleBack} className=" text-color-primary flex justify-start items-center px-3 rounded border font-bold" ><ArrowFatLineLeft size={32} />Back</button>
            <h3 className="text-color-primary text-2xl font-bold" >{title}</h3>
        </div>
    )
}

export default Header