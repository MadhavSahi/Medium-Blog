import { ChangeEvent } from "react";

export interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) => {
  return (
    <div className="flex flex-col justify-normal">
      <label className=" text-left block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default LabelledInput;
