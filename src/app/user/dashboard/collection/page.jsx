import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <section className="py-4 mx-6 ">
            <Header title="My Collection" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" >
            <Link href="/" className=" relative mt-4 border-2 border-color-accent " >
                <Image src="" alt="" width={350} height={350} className="w-full" />
                <div className=" absolute bottom-0 flex items-center justify-center w-full bg-color-accent h-16">
                    <h3 className="text-xl text-center">Judul Anime</h3>
                </div>
            </Link>
            <Link href="/" className=" relative mt-4 border-2 border-color-accent " >
                <Image src="" alt="" width={350} height={350} className="w-full" />
                <div className=" absolute bottom-0 flex items-center justify-center w-full bg-color-accent h-16">
                    <h3 className="text-xl text-center">Judul Anime</h3>
                </div>
            </Link>
            <Link href="/" className=" relative mt-4 border-2 border-color-accent " >
                <Image src="" alt="" width={350} height={350} className="w-full" />
                <div className=" absolute bottom-0 flex items-center justify-center w-full bg-color-accent h-16">
                    <h3 className="text-xl text-center">Judul Anime</h3>
                </div>
            </Link>
            <Link href="/" className=" relative mt-4 border-2 border-color-accent " >
                <Image src="" alt="" width={350} height={350} className="w-full" />
                <div className=" absolute bottom-0 flex items-center justify-center w-full bg-color-accent h-16">
                    <h3 className="text-xl text-center">Judul Anime</h3>
                </div>
            </Link>
        </div>
        </section>
    )
}

export default page;