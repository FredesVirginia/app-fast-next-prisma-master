import Link from "next/link";

function NavBar (){
    return (
        <nav className="bg-blue-800 text-white">
           <div className="container mx-auto flex justify-between items-center py-3">
           <h3 className="font-bold text-1xl ml-8"> Next Crud</h3>
            <ul className=" flex gap-12 font-bold text-1xl mr-8">
                <li className="hover:text-gray-600">
                    <Link href="/">
                            All Tasks
                    </Link>
                </li>

                <li className="hover:text-gray-600">
                    <Link href="/new">
                     Created new Task
                    </Link>
                </li>
            </ul>
           </div>
        </nav>
    )
}

export default NavBar;