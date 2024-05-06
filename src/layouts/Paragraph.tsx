export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-dark-gray mb-6 leading-relaxed sm:leading-loose">
      {children}
    </p>
  );
}
