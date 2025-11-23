// hero-sektion med stort billede og tekst overlay

import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

type HeroProps = {
  kicker?: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export default function Hero({
  kicker,
  title,
  body,
  imageSrc,
  imageAlt = "",
  className,
}: HeroProps) {
  return (
    <section className={`hero ${className ?? ""}`}>
      {/* baggrundsbillede */}
      <div className="hero__media">
        <Image src={imageSrc} alt={imageAlt} size="hero" className="hero__image" />
      </div>

      {/* panel ovenpå billedet */}
      <div className="hero__overlay">
        <div className="hero__panel">
          {/* lille label tekst over overskriften */}
          {kicker && (
            <Text variant="kicker-large" className="hero__kicker">
              {kicker}
            </Text>
          )}
          {/* hovedoverskrift */}
          <Heading level={1} className="hero__title">
            {title}
          </Heading>
          {/* brødtekst i panelet */}
          <Text variant="lead" className="hero__body">
            {body}
          </Text>
        </div>
      </div>
    </section>
  );
}
