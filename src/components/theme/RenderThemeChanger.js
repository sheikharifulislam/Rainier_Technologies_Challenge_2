import { useContext, useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ThemeContext } from './ThemeContext';

const RenderThemeChanger = ({ rounded }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === 'dark') {
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`${
          rounded ? 'rounded-full' : 'rounded-lg'
        } whitespace-nowrap text-lg flex items-center dark:bg-smoky-black border dark:border-hot-pink dark:hover:bg-zinc-900`}
      >
        <BsSun className="box-content p-3 text-white" />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`${
          rounded ? 'rounded-full' : 'rounded-lg'
        } whitespace-nowrap text-lg flex items-center border border-gray-300 bg-gray-50 hover:bg-white dark:hover:bg-zinc-900`}
      >
        <BsMoon className="box-content p-3" />
      </button>
    );
  }
};
export default RenderThemeChanger;
