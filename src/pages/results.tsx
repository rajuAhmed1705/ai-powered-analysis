import { experimental_useObject as useObject } from "ai/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { analysisSchema } from "../../app/api/analysis/schema";

const Results: React.FC = () => {
  const router = useRouter();
  const { data } = router.query;

  const formData = data ? JSON.parse(data as string) : {};

  const { object, submit, isLoading } = useObject({
    api: "/api/analysis",
    schema: analysisSchema,
  });

  const analysisResultSave = async () => {
    try {
      const response = await fetch("/api/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { userInput: formData, aiAnalysis: object },
        }),
      });

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!object && !isLoading) {
      submit(data);
    }

    if (object && !isLoading) {
      analysisResultSave();
    }
  }, [isLoading]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Survey Results</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(formData, null, 2)}
      </pre>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(object, null, 2)}
      </pre>
    </div>
  );
};

export default Results;
