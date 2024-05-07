import { MouseEventHandler } from "react";

function Button({
  children,
  disable = false,
  ariaLabel = "",
  onClick = () => {},
}: {
  children: React.ReactNode;
  disable?: boolean;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={(e) => onClick(e)}
      aria-label={ariaLabel}
      className={`py-5 px-10 rounded-full font-semibold text-white hover:bg-dark-cyan leading-none ${
        disable ? "pointer-events-none bg-dark-gray" : "bg-moderate-cyan"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
