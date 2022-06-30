import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const ProfileMenu = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const closeProfileMenu = () => setIsProfileMenuOpen(false);
    const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
    return (
        <div className="relative">
            <div className="relative">
                <button
                    onClick={toggleProfileMenu}
                    className="whitespace-nowrap rounded-full border border-gray-300 text-lg hover:bg-gray-100 focus:outline-none focus:ring-offset-0 dark:border-hot-pink dark:hover:bg-zinc-900"
                >
                    <div>
                        <img
                            className="h-11 w-11 rounded-full"
                            src="./images/avatar.png"
                            alt=""
                        />
                    </div>
                </button>
            </div>
            {/* dropdowns */}
            <div
                className={`${
                    isProfileMenuOpen
                        ? "z-50 translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                }  absolute right-4 z-50 mt-2 w-64 transform divide-y divide-gray-300 overflow-hidden rounded-xl bg-white p-1 shadow-lg ring-1 ring-gray-100 transition-all duration-200 focus:outline-none dark:divide-smoky-black dark:bg-dark-sienna dark:ring-hot-pink`}
            >
                <div className="py-1">
                    <button
                        onClick={closeProfileMenu}
                        className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100 dark:text-white dark:hover:bg-hot-pink"
                    >
                        <p className="flex items-center gap-2">Profile</p>
                        <BsChevronRight />
                    </button>
                    <button
                        onClick={closeProfileMenu}
                        className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100 dark:text-white dark:hover:bg-hot-pink"
                    >
                        <p className="flex items-center gap-2">Appointments</p>
                        <BsChevronRight />
                    </button>
                    <button
                        onClick={closeProfileMenu}
                        className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100 dark:text-white dark:hover:bg-hot-pink"
                    >
                        <p className="flex items-center gap-2">
                            Medical History
                        </p>
                        <BsChevronRight />
                    </button>
                </div>
                <div>
                    <button
                        onClick={closeProfileMenu}
                        className="flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-100 dark:text-white dark:hover:bg-hot-pink"
                    >
                        <p className="flex items-center gap-2">Logout</p>
                        <BsChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
