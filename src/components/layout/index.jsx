import Header from "./Header";

const MessagingMain = ({ children }) => {
    return (
        <div className="relative mx-auto flex h-screen overflow-hidden shadow-md">
            <div className="flex min-w-0 flex-1 overflow-hidden">
                {/* <Sidebar /> */}
                <div className="relative z-0 flex flex-1 flex-col overflow-hidden px-2 md:px-4 lg:px-6">
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MessagingMain;
