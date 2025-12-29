export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground ui-text">
          © {new Date().getFullYear()} Lucas Freitas. All rights reserved.
        </p>
        <p className="text-muted-foreground ui-text">
          Built with precision and purpose.
        </p>
      </div>
    </footer>
  );
}