import RenderThemeChanger from '../theme/RenderThemeChanger';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  return (
    <>
      <header className="mx-auto w-full z-40">
        {/* Desktop menu */}
        <div className="flex gap-4 2xl:container mx-auto justify-between items-center lg:py-6 py-4">
          {/* page name */}
          <div className="dark:text-white font-semibold text-lg">Home</div>
          {/* end of page name */}
          {/* right side */}
          <div className="flex items-center gap-1.5 md:gap-2.5">
            {/* theme button */}
            <RenderThemeChanger rounded />
            {/* profile options */}
            <ProfileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
