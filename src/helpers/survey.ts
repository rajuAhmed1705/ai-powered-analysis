import { SurveyAttrs } from "@/types/survey";
import fs from "fs";
import path from "path";

export const surveyData = () => {
  const filePath = path.join(process.cwd(), "src/data", "survey.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data: SurveyAttrs = JSON.parse(jsonData);
  return data;
};
