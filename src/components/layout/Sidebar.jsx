import { BiUser } from "react-icons/bi";
import {
    BsArrowCounterclockwise,
    BsCalendar4Week,
    BsGear,
    BsPlus,
} from "react-icons/bs";
import { FiHome, FiMenu } from "react-icons/fi";

const Sidebar = () => {
    return (
        <aside className="h-screen border border-purple-900 bg-white px-2 pt-7 dark:bg-[#2E1619] sm:pt-9">
            <nav>
                <ul className="space-y-6">
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <FiMenu className="h-7 w-7 text-[#FF7594] group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <FiHome className="h-7 w-7 text-[#FF7594] group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BiUser className="h-7 w-7 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BsCalendar4Week className="h-7 w-7 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BsArrowCounterclockwise className="h-7 w-7 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BsGear className="h-7 w-7 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <button className="mt-16 rounded-full bg-gradient-to-r from-hot-pink to-orange-peach">
                            <BsPlus className=" box-content h-7 w-7 rounded-full bg-white bg-opacity-20 p-1 group-hover:text-hot-pink" />
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
