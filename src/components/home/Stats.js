import { BsCaretUpFill } from 'react-icons/bs';

const Stats = () => {
  return (
    <div className="py-7">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6">
        <div className="rounded flex flex-col space-y-1.5 p-3 shadow-md bg-white dark:bg-opacity-10">
          <img className="w-10 h-10" src="./icons/heart.png" alt="" />
          <p className="text-xs font-semibold">Pulse Count</p>
          <p>60 bpm</p>
          <p className="flex items-center gap-2">
            <BsCaretUpFill />
            <span className="text-green-500 text-xs">Normal</span>
          </p>
        </div>
        <div className="rounded flex flex-col space-y-1.5 p-3 shadow-md bg-white dark:bg-opacity-10">
          <img className="w-10 h-10" src="./icons/bp.png" alt="" />
          <p className="text-xs font-semibold">Blood Pressure</p>
          <p>110/70 mmHg</p>
          <p className="flex items-center gap-2">
            <BsCaretUpFill />
            <span className="text-green-500 text-xs">Slightly higher</span>
          </p>
        </div>
        <div className="rounded flex flex-col space-y-1.5 p-3 shadow-md bg-white dark:bg-opacity-10">
          <img className="w-10 h-10" src="./icons/oxygen.png" alt="" />
          <p className="text-xs font-semibold">Oxygen Saturation</p>
          <p>97 %</p>
          <p className="flex items-center gap-2">
            <BsCaretUpFill />
            <span className="text-green-500 text-xs">Slightly higher</span>
          </p>
        </div>
        <div className="rounded flex flex-col space-y-1.5 p-3 shadow-md bg-white dark:bg-opacity-10">
          <img className="w-10 h-10" src="./icons/glucose.png" alt="" />
          <p className="text-xs font-semibold">Glucose Count</p>
          <p>100 mm/dL</p>
          <p className="flex items-center gap-2">
            <BsCaretUpFill />
            <span className="text-green-500 text-xs">Normal</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
