import RenderThemeChanger from "../theme/RenderThemeChanger";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
    return (
        <>
            <header className="z-40 mx-auto w-full">
                <div className="mx-auto flex items-center justify-between gap-4 py-4 lg:py-6 2xl:container">
                    {/* page name */}
                    <div className="text-lg font-semibold dark:text-white">
                        Home
                    </div>
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
