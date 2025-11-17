import DykonButton from "../atoms/Button";
import { useCompare } from "../../state/CompareContext";

type Props = {
  id: number;
  name: string;
};

export default function ProductCard({ id, name }: Props) {
  const { isSelected, toggle, atCapacity } = useCompare();

  const selected = isSelected(id);
  const disabled = !selected && atCapacity; //maks. 2 kan vælges til sammenligning

  return (
    <div className="card product-card">
      <h3>{name}</h3>

      <DykonButton
        label={selected ? "Fjern fra sammenligning" : "Vælg til sammenligning"}
        variant={selected ? "secondary" : "primary"}
        onClick={() => toggle(id)}
      />
      {disabled && <p className="text-muted" style={{marginTop: 8}}>Klik på 2 dyner og sammenlign</p>}
    </div>
  );
}
