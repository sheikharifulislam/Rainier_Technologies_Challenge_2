const Appointments = () => {
    return (
        <section className="flex max-h-[80vh] flex-col space-y-6 overflow-hidden rounded bg-white p-4 shadow-md dark:bg-white/10">
            <h1 className="text-xl font-semibold">Upcoming Appointments</h1>
            <ul className="hide-scrollbar overflow-y-auto">
                {[...Array(10)].map((_, i) => (
                    <li key={i}>
                        <div className="relative pb-8">
                            <span className="absolute top-4 left-1.5 -ml-px h-full w-[1px] bg-gray-200"></span>
                            <div className="relative flex items-center space-x-3">
                                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-hot-pink ring-8 ring-white dark:ring-[#2D2322]"></span>
                                <div className="flex min-w-0 flex-1 space-x-4 overflow-hidden rounded-md border border-hot-pink/20 bg-baby-peach dark:bg-white/10">
                                    <div className="rounded-r-2xl border-r border-hot-pink/20 bg-white p-3 px-4 text-center">
                                        <p className="text-xs text-gray-400">
                                            2022
                                        </p>
                                        <p className="font-medium dark:text-gray-600">
                                            13
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Sep
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-between py-1.5">
                                        <div>
                                            <h1>Dr. Muhammad Abdul Hussein</h1>
                                            <p className="text-xs text-gray-600 dark:text-gray-200">
                                                Cardiologist
                                            </p>
                                        </div>
                                        <div className="mt-auto flex flex-wrap gap-2">
                                            <div className="rounded bg-white p-1">
                                                <p className="text-xs text-gray-400">
                                                    Slot{" "}
                                                    <span className="text-gray-600">
                                                        Morning
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="rounded bg-white p-1">
                                                <p className="text-xs text-gray-400">
                                                    Time{" "}
                                                    <span className="text-gray-600">
                                                        10:00 AM
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Appointments;
