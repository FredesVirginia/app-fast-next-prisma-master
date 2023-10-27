import Link from "next/link";

function NotFound (){
    return (
        <section className="flex h-screen justify-center items-center">
            <div>
                <h1 className="text-4xl font bold text-black">Not Found</h1>
                <Link href="/">Volver al Iniicio</Link>
            </div>
        </section>
    )
}

export default NotFound;