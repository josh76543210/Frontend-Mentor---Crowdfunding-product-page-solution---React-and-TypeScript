function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative bg-red-400 py-8 px-4 rounded-lg ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
