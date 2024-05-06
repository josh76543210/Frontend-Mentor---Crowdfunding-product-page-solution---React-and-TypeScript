function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative bg-white border py-8 px-16 rounded-lg ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
