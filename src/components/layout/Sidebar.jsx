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
        <aside className="h-screen bg-white px-2 pt-7 dark:bg-[#2E1619] sm:pt-9">
            <nav>
                <ul className="space-y-6">
                    <li className="li group">
                        <FiMenu className="li-icon text-[#FF7594]" />
                    </li>
                    <li className="li group">
                        <FiHome className="li-icon text-[#FF7594]" />
                    </li>
                    <li className="li group">
                        <BiUser className="li-icon" />
                    </li>
                    <li className="li group">
                        <BsCalendar4Week className="li-icon" />
                    </li>
                    <li className="li group">
                        <BsArrowCounterclockwise className="li-icon" />
                    </li>
                    <li className="li group">
                        <BsGear className="li-icon" />
                    </li>
                    <li className="li group">
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
