import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCompare } from "../../state/CompareContext";
import duvets from "../../data/duvets.json";

export default function CompareView() {
  const nav = useNavigate();
  const { selectedIds, canCompare } = useCompare();

  useEffect(() => {
    // redirect hvis bruger ikke har 2 valg
    if (!canCompare) nav("/result", { replace: true });
  }, [canCompare, nav]);

  if (!canCompare) return null; 

  const [aId, bId] = selectedIds;
  const a = duvets.find(d => d.id === aId);
  const b = duvets.find(d => d.id === bId);

  return (
    <section className="compare">
      {}
    </section>
  );
}
