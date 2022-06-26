import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

const ProfileMenu = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  return (
    <div className="relative">
      <div className="relative">
        <button
          onClick={toggleProfileMenu}
          className="whitespace-nowrap border border-gray-300 dark:border-hot-pink dark:hover:bg-zinc-900 hover:bg-gray-100 rounded-full text-lg focus:outline-none focus:ring-offset-0"
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
            ? 'opacity-100 translate-y-0 z-50'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }  transform transition-all divide-y divide-gray-300 dark:divide-smoky-black duration-200 absolute z-50 right-4 mt-2 p-1 w-64 rounded-xl shadow-lg overflow-hidden dark:bg-dark-sienna bg-white ring-1 ring-gray-100 dark:ring-hot-pink focus:outline-none`}
      >
        <div className="py-1">
          <button
            onClick={closeProfileMenu}
            className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-hot-pink rounded-lg dark:text-white w-full"
          >
            <p className="flex items-center gap-2">Profile</p>
            <BsChevronRight />
          </button>
          <button
            onClick={closeProfileMenu}
            className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-hot-pink rounded-lg dark:text-white w-full"
          >
            <p className="flex items-center gap-2">Appointments</p>
            <BsChevronRight />
          </button>
          <button
            onClick={closeProfileMenu}
            className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-hot-pink rounded-lg dark:text-white w-full"
          >
            <p className="flex items-center gap-2">Medical History</p>
            <BsChevronRight />
          </button>
        </div>
        <div>
          <button
            onClick={closeProfileMenu}
            className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-hot-pink rounded-lg dark:text-white w-full"
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
