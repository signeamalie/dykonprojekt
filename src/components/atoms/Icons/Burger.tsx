type BurgerProps = { onClick?: () => void };
export default function Burger({ onClick }: BurgerProps) {
  return (
    <button className="site-header__menu" onClick={onClick} aria-label="Menu">
      <span className="burger" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
}