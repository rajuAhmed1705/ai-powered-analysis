// app/api/result/route.ts

import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  const filePath = path.join(process.cwd(), "app/api/result", "result.json");

  try {
    // Parse request body
    const { data: analysisData } = await req.json();

    // Read the existing file
    const data = fs.readFileSync(filePath, "utf8");
    let existingData = [];

    if (data) {
      try {
        existingData = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing JSON", parseError);
        return NextResponse.json(
          { error: "Failed to parse JSON" },
          { status: 500 }
        );
      }
    }

    // Ensure existing data is an array
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Append the new data
    existingData.push(analysisData);

    // Write the updated array back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");

    // Successfully saved data
    return NextResponse.json(
      { message: "File saved successfully", analysisData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling request", error);
    return NextResponse.json(
      { error: "Failed to handle the request" },
      { status: 500 }
    );
  }
}
