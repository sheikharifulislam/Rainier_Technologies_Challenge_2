import Sidebar from "../layout/Sidebar";
import Appointments from "./Appointments";
import Greetings from "./Greetings";
import Stats from "./Stats";
import Todo from "./Todo";
import Updates from "./Updates";

const Home = () => {
    return (
        <section className="hide-scrollbar container mx-auto space-y-6 overflow-y-auto py-6">
            <div className="flex flex-wrap justify-between">
                <div className="">
                    <Sidebar />
                </div>
                <div className="w-1/2 border border-yellow-800">
                    <Greetings />
                    <Stats />
                </div>

                <div className="w-[30%] border border-purple-900">
                    <Appointments />
                </div>

                <div className="col-span-12 md:order-2 md:col-span-7">
                    <Todo />
                </div>

                <div className="col-span-12 md:order-4 xl:col-span-5">
                    <Updates />
                </div>
            </div>
        </section>
    );
};

export default Home;
