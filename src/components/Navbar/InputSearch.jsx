"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    
    
    function handleSearch(e){
        const keyword = searchRef.current.value
        
        if(!keyword || keyword.trim() === '') return

        if(e.key === "Enter" || e.type === "click"){
            e.preventDefault()
            router.push(`/search/${keyword}`)
        }
        
    }

    return (
        <div className="relative" >
            <input placeholder="cari anime.." 
                className="w-full rounded p-2 "
                ref={searchRef} 
                onKeyDown={handleSearch}/>
            <button onClick={handleSearch} >
                <MagnifyingGlass size={24} className=" absolute  top-2 end-1" />
            </button>
        </div>
    )
}

export default InputSearch