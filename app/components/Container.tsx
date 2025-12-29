export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
  );
}
