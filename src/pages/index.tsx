import { surveyData } from "@/helpers/survey";
import { SurveyAttrs } from "@/types/survey";
import { GetStaticProps } from "next";
import router from "next/router";

const Home: React.FC<SurveyAttrs> = ({ title, description }) => {
  const handleButtonClick = () => {
    router.push("survey");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {title}
      </h1>
      <p className="text-center text-sm text-gray-500">{description}</p>
      <button
        className="w-32 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleButtonClick}
      >
        Start
      </button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = surveyData();

  return {
    props: {
      title: data.title,
      description: data.description,
    },
  };
};

export default Home;
