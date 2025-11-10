import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

type LogoProps = { onClick?: () => void };

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="site-header__logo"
      aria-label="Flora Danica"
    >
      <img src={logo} alt="Flora Danica" className="logo-img" />
    </Link>
  );
}