import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";

const { default: Link } = require("next/link")

const Navbar = () => {

    return (
        <header className="bg-color-accent">
        <div className="flex md:flex-row flex-col  gap-2 justify-between p-3 md:items-center" >
            <Link href="/" >
                <h1 className="font-bold text-2xl text-white md:mx-2 " >WebAnime</h1>
            </Link>
            <InputSearch/>
            <UserActionBtn/>
        </div>
        </header>
    )
}

export default Navbar;