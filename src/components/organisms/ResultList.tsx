// viser resultat-listen på resultatsiden

import DykonButton from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useCompare } from "../../state/CompareContext";
import duvetsData from "../../data/duvets.json";
import type { Duvet } from "../../types/duvet";

// caster json til vores duvet-type
const allDuvets = duvetsData as Duvet[];

type ResultListProps = {
  // alle svar fra quizz'en (kommer fra ResultPage)
  answers: Record<number, string>;
};

export default function ResultList({ answers }: ResultListProps) {
  const nav = useNavigate();
  const { isSelected, toggle, canCompare } = useCompare();

  //filtrering baseret på quiz svar//
function filterDuvets(answers: Record<number, string>) {
  return allDuvets.filter((duvet) => {
    const temp = answers[1];
    const allergy = answers[2];
    const feel = answers[3];
    const budget = answers[4];

    // 1. soveværelsestemperatur -> warmth
    if (temp === "varm" && duvet.warmth === "varm") return false;
    if (temp === "kold" && duvet.warmth === "sval") return false;

    // 2. allergi
    if (allergy === "ja" && duvet.hypoallergenic !== true) return false;

    // 3. følelse når man sover
    if (feel === "varmt" && duvet.warmth === "varm") return false;
    if (feel === "koldt" && duvet.warmth === "sval") return false;

    // 4. budget
    if (budget === "lav" && duvet.price > 2000) return false;
    if (budget === "mellem" && duvet.price > 4000) return false;

    return true;
  });
}

  const matches = filterDuvets(answers);

  return (
    <section style={{ padding: "2rem 1rem 4rem" }}>     

      {/* liste med dyner */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        {matches.map((duvet) => (
          <article key={duvet.id}>
            {/* billede */}
            <img
              src={duvet.images[0]} // fx "/images/tusindfrydekstravarm.jpg"
              alt={duvet.name}
              style={{
                width: "100%",
                display: "block",
              }}
            />

            {/* grå sektion under billedet */}
            <div
              style={{
                backgroundColor: "#f1eeea",
                padding: "2rem 1.5rem 2.5rem",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "Playfair, serif",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                  marginBottom: "1.5rem",
                }}
              >
                {duvet.name}
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "0.75rem",
                  maxWidth: "260px",
                  margin: "0 auto",
                }}
              >
                {/* se produkt – foreløbig bare placeholder */}
                <DykonButton
                  label="SE PRODUKT"
                  variant="secondary"
                  onClick={() => {
                    // her kunne man senere linke videre til rigtig produktside
                    console.log("Se produkt:", duvet.name);
                  }}
                />

                {/* sammenlign-knap – bruger vores compare-context */}
                <DykonButton
                  label={isSelected(duvet.id) ? "FJERN FRA SAMMENLIGNING" : "SAMMENLIGN"}
                  onClick={() => toggle(duvet.id)}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* bund-tekst + evt. “gå til sammenligning”-knap */}
      <div
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
          fontSize: ".9rem",
          color: "#666",
        }}
      >
        {canCompare ? (
          <>
            <p style={{ marginBottom: "0.75rem" }}>
              Du har valgt 2 dyner – klar til at sammenligne.
            </p>
            <DykonButton
              label="GÅ TIL SAMMENLIGNING"
              onClick={() => nav("/compare")}
            />
          </>
        ) : (
          <p>Vælg to dyner for at sammenligne.</p>
        )}
      </div>
    </section>
  );
}
