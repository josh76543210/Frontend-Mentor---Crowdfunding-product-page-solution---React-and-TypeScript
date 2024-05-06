function Button({
  children,
  disable = false,
}: {
  children: React.ReactNode;
  disable?: boolean;
}) {
  return (
    <button
      className={`py-5 px-10 rounded-full font-semibold text-white hover:bg-dark-cyan leading-none ${
        disable ? "pointer-events-none bg-dark-gray" : "bg-moderate-cyan"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
