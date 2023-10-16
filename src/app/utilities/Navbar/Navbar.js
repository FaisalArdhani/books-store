import Link from "next/link"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {

    return (
        <header className="bg-[#4070f4] px-4">
            <div className="flex justify-between p-4 items-center">
                <Link href='/' className="font-bold text-white text-2xl ">Books Store</Link>
                <div className="flex gap-2 items-center px-4">
                    <BsSearch className="text-2xl text-white cursor-pointer font-semibold" />
                    <AiOutlineShoppingCart className="text-3xl text-white cursor-pointer ml-4" />
                </div>
            </div>
        </header>
    )
}

export default Navbar
