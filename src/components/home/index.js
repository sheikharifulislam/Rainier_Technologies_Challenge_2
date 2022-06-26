import Appointments from './Appointments';
import Greetings from './Greetings';
import Stats from './Stats';
import Todo from './Todo';
import Updates from './Updates';

const Home = () => {
  return (
    <section className="overflow-y-auto space-y-6 py-6 hide-scrollbar container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        <div className="xl:col-span-7 md:col-span-12 col-span-12">
          <Greetings />
          <Stats />
        </div>

        <div className="xl:col-span-5 md:col-span-6 col-span-12 md:order-3 xl:order-2">
          <Appointments />
        </div>

        <div className="md:col-span-7 col-span-12 md:order-2">
          <Todo />
        </div>

        <div className="xl:col-span-5 col-span-12 md:order-4">
          <Updates />
        </div>
      </div>
    </section>
  );
};

export default Home;
