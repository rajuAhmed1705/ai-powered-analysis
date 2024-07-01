import Dropdown from "@/components/Dropdown";
import RadioButton from "@/components/RadioButton";
import StarRating from "@/components/StarRating";
import TextInput from "@/components/TextInput";
import { surveyData } from "@/helpers/survey";
import { ElementAttrs, SurveyAttrs } from "@/types/survey";
import { GetStaticProps } from "next";
import router from "next/router";
import React, { useState } from "react";

const Survey: React.FC<SurveyAttrs> = ({ pages }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = pages[currentPageIndex];
  const [formData, setFormData] = useState<Record<string, string>>({});

  const renderElement = (element: ElementAttrs) => {
    switch (element.type) {
      case "rating":
        return (
          <StarRating
            key={element.name}
            name={element.name}
            title={element.title}
            isRequired={element.isRequired}
            description={element.description}
            maxRating={element.rateMax || 5}
            onChange={handleChange}
          />
        );
      case "dropdown":
        return (
          <Dropdown
            key={element.name}
            name={element.name}
            title={element.title}
            isRequired={element.isRequired}
            description={element.description}
            choices={element.choices || []}
            onChange={handleChange}
          />
        );
      case "boolean":
        return (
          <RadioButton
            key={element.name}
            name={element.name}
            title={element.title}
            isRequired={element.isRequired}
            description={element.description}
            labelTrue={element.labelTrue || "Yes"}
            labelFalse={element.labelFalse || "No"}
            onChange={handleChange}
          />
        );
      case "text":
        return (
          <TextInput
            key={element.name}
            name={element.name}
            title={element.title}
            isRequired={element.isRequired}
            description={element.description}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push({
      pathname: "/results",
      query: {
        data: JSON.stringify(formData),
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex mb-8 flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {currentPage.title}
      </h1>
      <p className="text-center text-sm text-gray-500">
        {currentPage.description}
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {currentPage.elements.map(renderElement)}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrevious}
            className={`py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              currentPageIndex === 0 ? "invisible" : ""
            }`}
          >
            Previous
          </button>
          {currentPageIndex === pages.length - 1 ? (
            <button
              type="submit"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = surveyData();

  return {
    props: {
      pages: data.pages,
    },
  };
};

export default Survey;
