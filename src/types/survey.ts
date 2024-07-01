export interface ElementAttrs {
  name: string;
  type: string;
  title: string;
  inputType: string;
  isRequired: boolean;
  description: string;
  rateMax?: number;
  rateMin?: number;
  rateCount?: number;
  maxRateDescription?: string;
  minRateDescription?: string;
  choices?: string[];
  labelTrue?: string;
  labelFalse?: string;
}

export interface SurveyAttrs {
  pages: {
    name: string;
    title: string;
    elements: ElementAttrs[];
    description: string;
  }[];
  title: string;
  description: string;
}
