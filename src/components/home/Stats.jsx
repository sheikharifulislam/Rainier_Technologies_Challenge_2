import { BsCaretUpFill } from "react-icons/bs";

const Stats = () => {
    return (
        <div className="py-7">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] gap-2">
                <div className="flex flex-col space-y-1.5 rounded bg-white p-3 shadow-md dark:bg-opacity-10">
                    <img className="h-10 w-10" src="./icons/heart.png" alt="" />
                    <p className="text-xs font-semibold">Pulse Count</p>
                    <p>60 bpm</p>
                    <p className="flex items-center gap-2">
                        <BsCaretUpFill />
                        <span className="text-xs text-green-500">Normal</span>
                    </p>
                </div>
                <div className="flex flex-col space-y-1.5 rounded bg-white p-3 shadow-md dark:bg-opacity-10">
                    <img className="h-10 w-10" src="./icons/bp.png" alt="" />
                    <p className="text-xs font-semibold">Blood Pressure</p>
                    <p>110/70 mmHg</p>
                    <p className="flex items-center gap-2">
                        <BsCaretUpFill />
                        <span className="text-xs text-green-500">
                            Slightly higher
                        </span>
                    </p>
                </div>
                <div className="flex flex-col space-y-1.5 rounded bg-white p-3 shadow-md dark:bg-opacity-10">
                    <img
                        className="h-10 w-10"
                        src="./icons/oxygen.png"
                        alt=""
                    />
                    <p className="text-xs font-semibold">Oxygen Saturation</p>
                    <p>97 %</p>
                    <p className="flex items-center gap-2">
                        <BsCaretUpFill />
                        <span className="text-xs text-green-500">
                            Slightly higher
                        </span>
                    </p>
                </div>
                <div className="flex flex-col space-y-1.5 rounded bg-white p-3 shadow-md dark:bg-opacity-10">
                    <img
                        className="h-10 w-10"
                        src="./icons/glucose.png"
                        alt=""
                    />
                    <p className="text-xs font-semibold">Glucose Count</p>
                    <p>100 mm/dL</p>
                    <p className="flex items-center gap-2">
                        <BsCaretUpFill />
                        <span className="text-xs text-green-500">Normal</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
