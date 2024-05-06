function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-moderate-cyan py-5 px-7 rounded-full font-semibold text-white hover:bg-dark-cyan leading-none">
      {children}
    </button>
  );
}

export default Button;
