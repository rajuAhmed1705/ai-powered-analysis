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
        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
