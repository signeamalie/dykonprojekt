// styrer hele quiz-flowet: hvilken question der vises, og hvilke svar brugeren har valgt

import { useState } from "react";
import questions from "../../data/questions.json";
import QuestionCard from "../molecules/QuestionCard";

type Question = {
  id: number;
  question: string;
  options: string[];
  icon: string;
};

// vi caster json til vores question-type
const typedQuestions = questions as Question[];

export default function Questionnaire() {
  // step = hvilket spørgsmål vi er på (index)
  const [step, setStep] = useState(0);
  // answers gemmer svarene, key = question id
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const current = typedQuestions[step];

  // finder sti til ikon ud fra filnavn i json
  const iconPath = new URL(
    `../../assets/images/icons/${current.icon}`,
    import.meta.url
  ).href;

  // opdaterer svar når man klikker på en option
  function handleOptionChange(value: string) {
    setAnswers(prev => ({ ...prev, [current.id]: value }));
  }

  // næste-knap: går videre hvis der er valgt noget
  function handleNext() {
    if (!answers[current.id]) return;

    if (step < typedQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // her er vi færdige med alle spørgsmål
      console.log("All answers:", answers);
      // senere: send videre til resultatside
    }
  }

  return (
    <QuestionCard
      question={current.question}
      options={current.options}
      selected={answers[current.id] ?? ""}
      onChange={handleOptionChange}
      onNext={handleNext}
      isLast={step === typedQuestions.length - 1}
      icon={iconPath}
    />
  );
}
