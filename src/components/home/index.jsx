import Appointments from "./Appointments";
import Greetings from "./Greetings";
import Stats from "./Stats";
import Todo from "./Todo";
import Updates from "./Updates";

const Home = () => {
    return (
        <section className="hide-scrollbar container mx-auto space-y-6 overflow-y-auto py-6">
            <div className="flex flex-wrap justify-between">
                <div className="border border-yellow-800">
                    <Greetings />
                    <Stats />
                </div>

                <div className="border border-purple-900">
                    <Appointments />
                </div>

                <div className="mt-4">
                    <Todo />
                </div>

                <div className="">
                    <Updates />
                </div>
            </div>
        </section>
    );
};

export default Home;
