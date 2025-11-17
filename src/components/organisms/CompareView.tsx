// her viser vi sammenligning mellem to dyner

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCompare } from "../../state/CompareContext";
import duvetsData from "../../data/duvets.json";
import type { Duvet } from "../../types/duvet";

// laver vores json om til rigtige Duvet-objekter
const duvets = duvetsData as Duvet[];

export default function CompareView() {
  const nav = useNavigate();
  const { selectedIds, canCompare } = useCompare();

  useEffect(() => {
    // hvis man ikke har valgt 2 dyner, sender vi tilbage til resultat-siden
    if (!canCompare) nav("/result", { replace: true });
  }, [canCompare, nav]);

  // hvis hooket siger nej, så viser vi ingenting
  if (!canCompare) return null;

  // vi ved nu, at der præcis er 2 id'er
  const [aId, bId] = selectedIds;

  // finder de to dyner i vores data
  const a = duvets.find(d => d.id === aId);
  const b = duvets.find(d => d.id === bId);

  // ekstra sikkerhed: hvis noget går galt, så viser vi ingenting
  if (!a || !b) return null;

  return (
    <section className="compare">
      {/* to do: side om side comparison layout her for a & b */}
    </section>
  );
}
