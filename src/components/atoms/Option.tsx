import Label from "./Label";
import Input from "./Input";

type OptionProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export default function Option({
  name,
  value,
  label,
  checked,
  onChange,
}: OptionProps) {
  return (
    <Label
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".75rem",
        fontSize: "1.1rem",
      }}
    >
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={e => onChange(e.target.value)}
        style={{ width: 18, height: 18 }}
      />
      <span>{label}</span>
    </Label>
  );
}
