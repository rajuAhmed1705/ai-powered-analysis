import { surveyData } from "@/helpers/survey";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { analysisSchema } from "./schema";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const context = await req.json();
  const surveyQuestions = surveyData();

  const result = await streamObject({
    model: openai("gpt-4-turbo"),
    schema: analysisSchema,
    prompt:
      `Generate analysis of the users response of the survey, first one is serve data and the second one is users response:` +
      surveyQuestions +
      context,
  });

  return result.toTextStreamResponse();
}
