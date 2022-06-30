import { BiUser } from "react-icons/bi";
import {
    BsArrowCounterclockwise,
    BsCalendar4Week,
    BsGear,
    BsPlus,
} from "react-icons/bs";
import { FiHome } from "react-icons/fi";

const Sidebar = () => {
    return (
        <aside className="border border-purple-900">
            <nav>
                <ul className="space-y-6">
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <FiHome className="h-6 w-6 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BiUser className="h-6 w-6 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BsCalendar4Week className="h-6 w-6 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BsArrowCounterclockwise className="h-6 w-6 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <BsGear className="h-6 w-6 group-hover:text-hot-pink" />
                    </li>
                    <li className="group relative cursor-pointer overflow-hidden px-2">
                        <button className="mt-16 rounded-full bg-gradient-to-r from-hot-pink to-orange-peach">
                            <BsPlus className=" box-content h-6 w-6 rounded-full bg-white bg-opacity-20 p-1 group-hover:text-hot-pink" />
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
