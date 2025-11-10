import Hero from "../molecules/Hero";
import Intro from "../molecules/Intro";
import heroImg from "../../../assets/images/dyneherobillede.jpg";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        kicker="Flora Danica"
        title="Find den dyne, der passer til netop dig"
        body="God søvn starter med den rigtige dyne. Vores naturlige og åndbare materialer hjælper dig med at finde den komfort, der passer til dig året rundt."
        imageSrc={heroImg}
        imageAlt="Flora Danica dyne i soveværelse"
      />

      <Intro
        title="Er du klar til at finde din perfekte dyne?"
        body="Vi gør det enkelt at finde den rigtige dyne. Besvar et par spørgsmål, og få en anbefaling, der passer til netop din søvn."
        ctaLabel="START"
        onCta={() => navigate("/quiz")}
      />
    </>
  );
}
