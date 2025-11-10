import Logo from "../atoms/Logo";
import Burger from "../atoms/Icons/Burger";

type HeaderProps = {
  onLogoClick?: () => void;
  onMenuClick?: () => void;
};

export default function Header({ onLogoClick, onMenuClick }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo onClick={onLogoClick} />
        <Burger onClick={onMenuClick} />
      </div>
    </header>
  );
}