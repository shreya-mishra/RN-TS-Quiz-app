export interface questionType {
  id: number;
  question: string;
  options: optionType[];
}
export interface optionType {
  text: string;
  isCorrect: boolean;
}
