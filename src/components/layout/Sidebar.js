import { BiUser } from 'react-icons/bi';
import {
  BsArrowCounterclockwise,
  BsCalendar4Week,
  BsGear,
  BsPlus
} from 'react-icons/bs';
import { FiHome } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center lg:items-start flex-shrink-0 lg:w-72 bg-white dark:bg-dark-sienna lg:p-4">
      {/* search */}
      <div className="w-full flex gap-5 lg:px-4 px-3 pb-6 pt-5 items-center justify-center lg:justify-start">
        <img src="./images/logo.png" alt="logo" />
        <h2 className="font-bold text-2xl hidden lg:block">
          Medi<span className="text-hot-pink">Doc</span>
        </h2>
      </div>
      {/* friends list */}
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide">
        <ul className="relative py-2 space-y-1">
          <li className="px-2 relative overflow-hidden cursor-pointer group">
            <div className="relative p-4 rounded-lg flex gap-4 items-center space-x-3">
              <FiHome className="w-6 h-6 text-hot-pink" />
              <div className="flex-1 min-w-0 hidden lg:block font-medium text-hot-pink">
                Home
              </div>
            </div>
          </li>
          <li className="px-2 relative overflow-hidden cursor-pointer group">
            <div className="relative p-4 rounded-lg flex gap-4 items-center space-x-3">
              <BiUser className="w-6 h-6 group-hover:text-hot-pink" />
              <div className="flex-1 min-w-0 hidden lg:block font-medium group-hover:text-hot-pink">
                Patient Profile
              </div>
            </div>
          </li>
          <li className="px-2 relative overflow-hidden cursor-pointer group">
            <div className="relative p-4 rounded-lg flex gap-4 items-center space-x-3">
              <BsCalendar4Week className="w-6 h-6 group-hover:text-hot-pink" />
              <div className="flex-1 min-w-0 hidden lg:block font-medium group-hover:text-hot-pink">
                Appointments
              </div>
            </div>
          </li>
          <li className="px-2 relative overflow-hidden cursor-pointer group">
            <div className="relative p-4 rounded-lg flex gap-4 items-center space-x-3">
              <BsArrowCounterclockwise className="w-6 h-6 group-hover:text-hot-pink" />
              <div className="flex-1 min-w-0 hidden lg:block font-medium group-hover:text-hot-pink">
                Medical History
              </div>
            </div>
          </li>
          <li className="px-2 relative overflow-hidden cursor-pointer group">
            <div className="relative p-4 rounded-lg flex gap-4 items-center space-x-3">
              <BsGear className="w-6 h-6 group-hover:text-hot-pink" />
              <div className="flex-1 min-w-0 hidden lg:block font-medium group-hover:text-hot-pink">
                Settings
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className="hidden w-full text-white lg:block rounded bg-gradient-to-r from-hot-pink to-orange-peach p-3">
        <span>New Appointment</span>
      </button>
      <button className="w-12 h-12 lg:hidden text-white flex items-center justify-center rounded-full bg-gradient-to-r from-hot-pink to-orange-peach">
        <BsPlus className="w-6 h-6 box-content p-1 rounded-full bg-white bg-opacity-20" />
      </button>
    </aside>
  );
};

export default Sidebar;
