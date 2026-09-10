import { FaCartPlus } from "react-icons/fa"
import { IoMdSearch } from "react-icons/io"
import Logo from "../assets/nav-logo.png"
import type { IPopularProduct } from "../types";
import type { Dispatch, SetStateAction } from "react";

interface INavbarProps {
    cart : IPopularProduct[];
    setCart : Dispatch<SetStateAction<IPopularProduct[]>>;
}

const Navbar = ({cart, setCart} : INavbarProps) => {
    return (
        <div className = " border-b border-gray-300">
            <nav className= "flex justify-between gap-4 container mx-auto py-4 ">
                <img src = {Logo} className = "w-[120px] h-[60px]" alt = " "/>
                <ul className="flex gap-4 items-center">
                    <li>
                        <a href = "/">Home</a>
                    </li>
                    <li>
                        <a href = "/">About us</a>
                    </li>
                    <li>
                        <a href = "/">Contact</a>
                    </li>
                    <li>
                        <a href = "/">Services</a>
                    </li>
                </ul>
            
                <div className="flex gap-4 items-center">
                    <IoMdSearch />
                    <FaCartPlus />
                    <span className="bg-[#179800] text-white px-2 py-1 rounded-full text-sm">
                        {cart.length}
                    </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-110 transition-transform duration-300">Login</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-orange-500 hover:scale-110 transition-transform duration-300">Sign up</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar