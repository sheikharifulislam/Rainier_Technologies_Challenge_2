import Appointments from "./Appointments";
import Greetings from "./Greetings";
import Stats from "./Stats";
import Todo from "./Todo";
import Updates from "./Updates";

const Home = () => {
    return (
        <section className="hide-scrollbar container mx-auto space-y-6 overflow-y-auto py-6">
            <div className="flex flex-wrap justify-between">
                <div className="md:w-full xl:w-auto">
                    <Greetings />
                    <Stats />
                </div>
                <div className="md:order-2 md:mt-3 md:w-[48%] xl:order-none xl:mt-0 xl:w-auto">
                    <Appointments />
                </div>
                <div className="md:order-1 md:mt-3 md:w-[48%] xl:order-none xl:mt-0 xl:w-auto">
                    <Todo />
                </div>
                <div className="w-full md:order-4 xl:order-none xl:w-auto">
                    <Updates />
                </div>
            </div>
        </section>
    );
};

export default Home;
