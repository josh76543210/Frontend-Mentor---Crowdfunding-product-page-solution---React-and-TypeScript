export default function Paragraph({
  children,
  id = "",
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <p id={id} className="text-dark-gray mb-6 leading-relaxed sm:leading-loose">
      {children}
    </p>
  );
}
