import { z } from "zod";

export const analysisSchema = z.object({
  summary: z.string().describe("Short summary of the answer"),
  sentimentAnalysis: z
    .string()
    .describe("e.g. “Positive”, “Neutral” or “Negative”"),
  category: z
    .string()
    .describe(
      "e.g. Categorize the open ended answer into a main topic. e.g.   “Work Environment complains"
    ),
  actionRecommendation: z
    .string()
    .describe(
      "One-sentence suggestion to solve the problem mentioned in the answer"
    ),
});
