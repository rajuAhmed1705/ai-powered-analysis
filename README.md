# AI-Powered Analysis Project

This project is a React application integrated with Next.js and an AI backend for analyzing and storing user data. It features a form for data submission and displays analyzed results on a results page.

## Table of Contents

- [AI-Powered Analysis Project](#ai-powered-analysis-project)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation and setup](#installation-and-setup)
  - [Running the Project](#running-the-project)
  - [Project Structure](#project-structure)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- OpenAI API key

### Installation and setup

1. Clone the repository:

   ```bash
   git clone https://github.com/rajuAhmed1705/ai-powered-analysis.git
   cd ai-powered-analysis
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Copy `env.local.example` and rename to `env.local`. Paste the `OPENAI_API_KEY` in the file.
4. Rename `app/api/result/result.json.example` to `app/api/result/result.json`.

## Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure

Here's a brief overview of the project's structure:

```plaintext
├── api
│    ├── analysis
│    │   └── schema.ts
│    └── result
│        └── route.ts
├── src
│   ├── components
│   │   └── YourComponent.tsx
│   ├── data
│   │   └── result.json
│   ├── helpers
│   │   └── helperFunctions.ts
│   ├── pages
│   │   ├── index.tsx
│   │   └── results.tsx
├── public
│   └── images
├── styles
│   └── globals.css
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── tsconfig.json
```
