import { FC } from "react";

interface YearInputsProps {
  minYear: number;
  maxYear: number;
  onMinYearChange: (year: number) => void;
  onMaxYearChange: (year: number) => void;
  onSubmit:()=>void
}

export const YearInputs: FC<YearInputsProps> = ({
  maxYear,
  minYear,
  onMaxYearChange,
  onMinYearChange,
  onSubmit
}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit()
  };
  
  return (
    <div className="flex flex-row ">
      <div className="mr-8">
        <label
          htmlFor="minYear"
          className="block text-sm font-medium text-gray-700"
        >
          Minimum Year
        </label>
        <input
          id="minYear"
          name="minYear"
          type="number"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter minimum year"
          value={minYear}
          onChange={(e) => onMinYearChange(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label
          htmlFor="maxYear"
          className="block text-sm font-medium text-gray-700"
        >
          Maximum Year
        </label>
        <input
          id="maxYear"
          name="maxYear"
          type="number"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter maximum year"
          value={maxYear}
          onChange={(e) => onMaxYearChange(parseInt(e.target.value, 10))}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 ml-4 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};
