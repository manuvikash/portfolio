interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`px-4 sm:px-6 py-5 sm:py-6 text-xs sm:text-sm text-[color:var(--fg-dim)] ${className}`}>
      © {new Date().getFullYear()} • Built with Next.js
    </footer>
  );
}
