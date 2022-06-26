import { BsPlus } from 'react-icons/bs';

const Todo = () => {
  return (
    <section className="p-4 space-y-6 bg-white dark:bg-white/10 rounded shadow-md max-h-[70vh] overflow-hidden flex flex-col">
      <h1 className="font-semibold text-xl">To-Do List</h1>
      <div className="relative">
        <div className="mt-1">
          <textarea
            rows="5"
            name="comment"
            id="comment"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-white dark:bg-white/30"
          ></textarea>
        </div>
        <button className="absolute right-2 bottom-2 w-10 h-10 rounded-full bg-hot-pink flex items-center justify-center">
          <BsPlus className="w-7 h-7 text-white" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative flex items-center">
          <div className="flex items-center h-5">
            <input
              id="select-all"
              name="select-all"
              type="checkbox"
              className="focus:ring-0 h-6 w-6 text-hot-pink border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="select-all" className="text-lg">
              Select All
            </label>
          </div>
        </div>
        <button className="text-white rounded bg-gradient-to-r from-hot-pink to-orange-peach px-3 py-1">
          <span>Done</span>
        </button>
      </div>
      <div className="py-3 space-y-4 overflow-y-auto hide-scrollbar">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="todo-1"
                name="todo-1"
                type="checkbox"
                className="focus:ring-0 h-6 w-6 text-hot-pink border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label for="todo-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </label>
              <p className="text-gray-500 text-sm">Last Added: 10 sep 2022</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Todo;
