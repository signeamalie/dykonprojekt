import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import DykonButton from "../atoms/Button";

type IntroProps = {
  title: string;
  body: string;
  ctaLabel: string;
  onCta?: () => void;
  className?: string;
};

export default function Intro({ title, body, ctaLabel, onCta, className }: IntroProps) {
  return (
    <section className={`intro ${className ?? ""}`}>
      <div className="intro__panel">
        <Heading level={2} className="intro__title">{title}</Heading>
        <Text variant="body" className="intro__body">{body}</Text>
        <DykonButton label={ctaLabel} onClick={onCta} />
      </div>
    </section>
  );
}