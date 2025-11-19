// her viser vi sammenligning mellem to dyner

import { useNavigate } from "react-router-dom";
import { useCompare } from "../../state/CompareContext";
import duvetsData from "../../data/duvets.json";
import type { Duvet } from "../../types/duvet";
import DykonButton from "../atoms/Button";
import compareIcon from "../../assets/images/icons/vaegt.png";

// laver vores json om til rigtige Duvet-objekter
const duvets = duvetsData as Duvet[];

export default function CompareView() {
  const nav = useNavigate();
  const { selectedIds, canCompare, clear } = useCompare();

  // hvis der ikke er 2 dyner valgt, viser vi bare ingenting
  if (!canCompare) return null;

  // vi ved nu, at der præcis er 2 id'er
  const [aId, bId] = selectedIds;

  // finder de to dyner i vores data
  const a = duvets.find((d) => d.id === aId);
  const b = duvets.find((d) => d.id === bId);

  // ekstra sikkerhed: hvis noget går galt, så viser vi ingenting
  if (!a || !b) return null;

  // hjælper-funktion til at vise "fill - warmth" tekst
  const formatMeta = (duvet: Duvet) => `${duvet.fill} - ${duvet.warmth}`;

  // hjælper-funktion til at formatere pris
  const formatPrice = (price: number) =>
    price.toLocaleString("da-DK") + " kr.";

  return (
    <section className="compare">
      <h1 className="compare__title">Sammenlign dine valg:</h1>

      <div className="compare__grid">
        {/* venstre dyne */}
        <article className="compare__item">
          <img src={a.images[0]} alt={a.name} className="compare__image" />
          <h2 className="compare__name">{a.name}</h2>
          <p className="compare__meta">{formatMeta(a)}</p>

          {/* badges med kort forklaring */}
          <ul className="compare__badges">
            {getBadges(a).map((badge) => (
              <li key={badge} className="compare__badge">
                {badge}
              </li>
            ))}
          </ul>

          {/* pris */}
          <p className="compare__price">{formatPrice(a.price)}</p>

          <DykonButton
            label="SE PRODUKT"
            onClick={() => {
              console.log("Se produkt:", a.name);
            }}
          />
        </article>

        {/* ikon i midten */}
        <div className="compare__icon">
          <img src={compareIcon} alt="" aria-hidden="true" />
        </div>

        {/* højre dyne */}
        <article className="compare__item">
          <img src={b.images[0]} alt={b.name} className="compare__image" />
          <h2 className="compare__name">{b.name}</h2>
          <p className="compare__meta">{formatMeta(b)}</p>

          {/* badges med kort forklaring */}
          <ul className="compare__badges">
            {getBadges(b).map((badge) => (
              <li key={badge} className="compare__badge">
                {badge}
              </li>
            ))}
          </ul>

          {/* pris */}
          <p className="compare__price">{formatPrice(b.price)}</p>

          <DykonButton
            label="SE PRODUKT"
            onClick={() => {
              console.log("Se produkt:", b.name);
            }}
          />
        </article>
      </div>


      {/* start forfra-knap */}
      <div className="compare__footer">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            nav("/");
            clear();
          }}
        >
          START FORFRA
        </button>
      </div>
    </section>
  );
}

// kort tekst der beskriver de vigtigste forskelle
function buildDifferenceText(a: Duvet, b: Duvet): string {
  const parts: string[] = [];

  // pris-sammenligning
  const aCheaper = a.price < b.price;
  const bCheaper = b.price < a.price;

  if (aCheaper) {
    parts.push(`${a.name} er billigere end ${b.name}.`);
  } else if (bCheaper) {
    parts.push(`${b.name} er billigere end ${a.name}.`);
  } else {
    parts.push("De to dyner ligger på samme prisniveau");
  }

  // simpel "rangering" af varmegrad
  const warmthRank = (w: string) => {
    const order = ["sval", "varm", "ekstra varm"];
    return order.indexOf(w.toLowerCase());
  };

  const aWarmer = warmthRank(a.warmth) > warmthRank(b.warmth);
  const bWarmer = warmthRank(b.warmth) > warmthRank(a.warmth);

  if (aWarmer) {
  parts.push(
    `${a.name} har en højere varmegrad end ${b.name}.`
  );
} else if (bWarmer) {
  parts.push(
    `${b.name} har en højere varmegrad end ${a.name}.`
  );
} else {
  parts.push(`Begge dyner har samme varmegrad`);
}

  return parts.join(" ");
}

// badges med kort “forklar dynen”-tekst
function getBadges(duvet: Duvet): string[] {
  const badges: string[] = [];

  // baseret på varmegrad
  if (duvet.warmth === "sval") {
    badges.push("God til varme soveværelser");
  }
  if (duvet.warmth === "varm" || duvet.warmth === "ekstra varm") {
    badges.push("Til dig der let fryser");
  }

  // allergivenlig
  if (duvet.hypoallergenic) {
    badges.push("Velegnet til allergikere");
  }

  // simpel indikator for prisniveau
  if (duvet.price < 2000) {
    badges.push("Budgetvenligt valg");
  } else if (duvet.price > 3500) {
    badges.push("Premium kvalitet");
  }

  return badges;
}
