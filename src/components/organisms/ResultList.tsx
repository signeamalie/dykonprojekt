import DykonButton from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useCompare } from "../../state/CompareContext";

export default function ResultList() {
  const nav = useNavigate();
  const { canCompare } = useCompare();

  return (
    <section>
      {}

      <div style={{ display: "grid", placeItems: "center", marginTop: "1rem" }}>
        <DykonButton
          label="Sammenlign"
          onClick={() => nav("/compare")}
          variant="primary"
          // ikke mulig at vælge hvis ikke præcis to er valgt
        />
        {!canCompare && (
          <p className="text-muted" style={{ marginTop: 8 }}>
            Vælg præcis to dyner for at sammenligne.
          </p>
        )}
      </div>
    </section>
  );
}
