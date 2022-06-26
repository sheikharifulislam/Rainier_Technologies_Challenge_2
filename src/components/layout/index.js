import Header from './Header';
import Sidebar from './Sidebar';

const MessagingMain = ({ children }) => {
  return (
    <div className="relative h-screen flex overflow-hidden mx-auto shadow-md">
      <div className="flex min-w-0 flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 relative z-0 flex flex-col overflow-hidden px-2 md:px-4 lg:px-6">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MessagingMain;
