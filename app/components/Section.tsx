export function Section({
  id,
  children,
  muted = false,
}: {
  id?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={`py-28 ${muted ? "bg-muted/30" : ""}`}>
      {children}
    </section>
  );
}
