
const Appointments = () => {
  return (
    <section className="p-4 space-y-6 bg-white dark:bg-white/10 rounded shadow-md max-h-[70vh] overflow-hidden flex flex-col">
      <h1 className="font-semibold text-xl">Upcoming Appointments</h1>
      <ul className="overflow-y-auto hide-scrollbar">
        {[...Array(10)].map((_, i) => (
          <li key={i}>
            <div className="relative pb-8">
              <span className="absolute top-4 left-1.5 -ml-px h-full w-[1px] bg-gray-200"></span>
              <div className="relative flex items-center space-x-3">
                <span className="h-3 w-3 rounded-full bg-hot-pink flex items-center justify-center ring-8 ring-white dark:ring-[#2D2322]"></span>
                <div className="min-w-0 bg-baby-peach dark:bg-white/10 border border-hot-pink/20 overflow-hidden rounded-md flex-1 flex space-x-4">
                  <div className="bg-white border-r border-hot-pink/20 rounded-r-2xl p-3 px-4 text-center">
                    <p className="text-xs text-gray-400">2022</p>
                    <p className="font-medium dark:text-gray-600">13</p>
                    <p className="text-sm text-gray-400">Sep</p>
                  </div>
                  <div className="flex flex-col justify-between py-1.5">
                    <div>
                      <h1>Dr. Muhammad Abdul Hussein</h1>
                      <p className="text-xs text-gray-600 dark:text-gray-200">
                        Cardiologist
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-auto">
                      <div className="bg-white rounded p-1">
                        <p className="text-xs text-gray-400">
                          Slot <span className="text-gray-600">Morning</span>
                        </p>
                      </div>
                      <div className="bg-white rounded p-1">
                        <p className="text-xs text-gray-400">
                          Time <span className="text-gray-600">10:00 AM</span>
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
