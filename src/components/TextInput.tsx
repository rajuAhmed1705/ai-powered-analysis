import React from "react";

interface TextInputProps {
  name: string;
  title: string;
  isRequired: boolean;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  title,
  isRequired,
  description,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        name={name}
        required={isRequired}
        onChange={onChange}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
      />
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default TextInput;
