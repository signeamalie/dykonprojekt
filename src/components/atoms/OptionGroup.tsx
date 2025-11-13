import Option from "./Option";

type OptionGroupProps = {
  name: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export default function OptionGroup({
  name,
  options,
  selected,
  onChange,
}: OptionGroupProps) {
  return (
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
        <Option
          key={option}
          name={name}
          value={option}
          label={option.charAt(0).toUpperCase() + option.slice(1)}
          checked={selected === option}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
