// et enkelt spørgsmålskort med ikon, radio-knapper og næste-knap

import type { ChangeEvent } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

type QuestionCardProps = {
  question: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  onNext: () => void;
  isLast: boolean;
  icon?: string;
};

export default function QuestionCard({
  question,
  options,
  selected,
  onChange,
  onNext,
  isLast,
  icon,
}: QuestionCardProps) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/*top ikon*/}
      <div
        style={{
          flex: "0 0 auto",
          padding: "2rem 0.5rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
          />
        )}
      </div>

      {/*questions og options*/}
      <div
        style={{
          backgroundColor: "#f1eeea",
          padding: "3rem 1.5rem",
          textAlign: "center",
          flex: "0 0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "Playfair, serif",
            fontSize: "1.4rem",
            marginBottom: "2rem",
          }}
        >
          {question}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "flex-start",
            maxWidth: "260px",
            margin: "0 auto",
          }}
        >
          {options.map(option => (
            <Label
              key={option}
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".75rem",
                fontSize: "1.1rem",
              }}
            >
              <Input
                type="radio"
                name="answer"
                value={option}
                checked={selected === option}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value)
                }
                style={{ width: 18, height: 18 }}
              />
              <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </Label>
          ))}
        </div>
      </div>

      {/* nedre knap */}
      <div
        style={{
          flex: "1 0 auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2rem 1rem 0rem",
        }}
      >
        <button className="btn-primary" onClick={onNext}>
          {isLast ? "SE RESULTAT" : "NÆSTE"}
        </button>
      </div>
    </section>
  );
}
