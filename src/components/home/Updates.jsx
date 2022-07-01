const Updates = () => {
    return (
        <div className="mt-4 w-full bg-white p-4 shadow-md dark:bg-white/10 xl:w-[380px]">
            <div className="flex items-start justify-between text-xs">
                <h5 className="text-left">Covid-19 updates</h5>
                <div className="text-right">
                    <h5>10 spetembor 2022 </h5>
                    <h5>Thursday 10:00:00 AM</h5>
                </div>
            </div>
            <div className="mt-4 flex w-full flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 xl:w-28">
                    <img
                        src="./images/Svg_sample2.svg"
                        className="w-full md:h-52 xl:h-auto"
                        alt=""
                    />
                </div>
                <div className="flex w-full flex-wrap space-y-3 rounded bg-hot-pink py-2 text-center md:w-1/2 md:flex-1 xl:space-y-0 xl:py-6">
                    <div className="w-full md:w-[50%]">
                        <h4 className="text-xs">Infection Number</h4>
                        <h4 className="text-[30px]">500</h4>
                    </div>
                    <div className="w-full md:w-1/2 xl:hidden">
                        <h4 className="text-xs">Total Infection</h4>
                        <h4 className="text-[30px]">500000</h4>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <h4 className="text-xs">Infection Rate</h4>
                        <h4 className="text-[30px]">10%</h4>
                    </div>
                    <div className="w-full md:w-1/2 xl:hidden">
                        <h4 className="text-xs">Number Of Death</h4>
                        <h4 className="text-[30px]">20</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates;
