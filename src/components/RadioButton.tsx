import React from "react";

interface RadioButtonProps {
  name: string;
  title: string;
  isRequired: boolean;
  description: string;
  labelTrue: string;
  labelFalse: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  title,
  isRequired,
  description,
  labelTrue,
  labelFalse,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value="true"
            required={isRequired}
            onChange={onChange}
            className="form-radio text-indigo-600"
          />
          <span className="ml-2">{labelTrue}</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value="false"
            required={isRequired}
            onChange={onChange}
            className="form-radio text-indigo-600"
          />
          <span className="ml-2">{labelFalse}</span>
        </label>
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default RadioButton;
