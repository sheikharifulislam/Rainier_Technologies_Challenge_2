import { BsPlus } from "react-icons/bs";

const Todo = () => {
    return (
        <section className="flex max-h-[70vh] flex-col space-y-6 overflow-hidden rounded bg-white p-4 shadow-md dark:bg-white/10 md:max-h-[80vh] xl:max-h-[70vh]">
            <h1 className="text-xl font-semibold">To-Do List</h1>
            <div className="relative">
                <div className="mt-1">
                    <textarea
                        rows="5"
                        name="comment"
                        id="comment"
                        className="block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-white/30 sm:text-sm"
                    ></textarea>
                </div>
                <button className="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-hot-pink">
                    <BsPlus className="h-7 w-7 text-white" />
                </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="relative flex items-center">
                    <div className="flex h-5 items-center">
                        <input
                            id="select-all"
                            name="select-all"
                            type="checkbox"
                            className="h-6 w-6 rounded border-gray-300 text-hot-pink focus:ring-0"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="select-all" className="text-lg">
                            Select All
                        </label>
                    </div>
                </div>
                <button className="rounded bg-gradient-to-r from-hot-pink to-orange-peach px-3 py-1 text-white">
                    <span>Done</span>
                </button>
            </div>
            <div className="hide-scrollbar space-y-4 overflow-y-auto py-3">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="todo-1"
                                name="todo-1"
                                type="checkbox"
                                className="h-6 w-6 rounded border-gray-300 text-hot-pink focus:ring-0"
                            />
                        </div>
                        <div className="ml-3 text-sm sm:pr-40">
                            <label for="todo-1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </label>
                            <p className="text-sm text-gray-500">
                                Last Added: 10 sep 2022
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Todo;
