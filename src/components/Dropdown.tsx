import React from "react";

interface DropdownProps {
  name: string;
  title: string;
  isRequired: boolean;
  description: string;
  choices: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  title,
  isRequired,
  description,
  choices,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        required={isRequired}
        onChange={onChange}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
      >
        {choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Dropdown;
