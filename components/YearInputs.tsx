import { FC } from "react";
import { MeasureSelector } from "./measureSelector";

interface YearInputsProps {
  minYear: number;
  maxYear: number;
  selectedMeasure: string;
  onMinYearChange: (year: number) => void;
  onMaxYearChange: (year: number) => void;
  onSelectionChange: (selection: string) => void;
  onSubmit:()=>void
}

export const YearInputs: FC<YearInputsProps> = ({
  maxYear,
  minYear,
  onMaxYearChange,
  onMinYearChange,
  onSelectionChange,
  selectedMeasure,
  onSubmit
}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit()
  };
  
  return (
    <div className="flex flex-row text-lg pt-4">
      <div className="mr-8">
        <label
          htmlFor="minYear"
          className="block text-lg font-medium text-gray-700 pb-2 pt-0.5"
        >
          Minimum Year
        </label>
        <input
          id="minYear"
          name="minYear"
          type="number"
          className="mt-1 block w-full pt-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-2sm"
          placeholder="min: 1950"
          value={minYear}
          onChange={(e) => onMinYearChange(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="">
        <label
          htmlFor="maxYear"
          className="block text-lg font-medium text-gray-700 pb-2"
        >
          Maximum Year
        </label>
        <input
          id="maxYear"
          name="maxYear"
          type="number"
          className="mt-1 block w-full pt-2 py-2 px-3  border h-12 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-2sm"
          placeholder="max: 2010"
          value={maxYear}
          onChange={(e) => onMaxYearChange(parseInt(e.target.value, 10))}
        />
      </div>
      <div className=" pl-5 pt-7">
        <MeasureSelector onSelectionChange={onSelectionChange} selectedMeasure={selectedMeasure}/>
      </div>     
      
      <div className="pt-4">
        <button
          id="submitButton"
          onClick={handleSubmit}
          className="mt-6 ml-4 pt-2 pb-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
