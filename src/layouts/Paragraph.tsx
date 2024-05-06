export default function Paragraph({
  children,
  id = "",
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <p
      id={id}
      className={`text-dark-gray leading-relaxed sm:leading-loose ${className}`}
    >
      {children}
    </p>
  );
}
