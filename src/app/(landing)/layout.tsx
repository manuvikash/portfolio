import Footer from '../components/Footer';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-enter page-enter-active min-h-dvh flex flex-col">
      {/* Header is intentionally omitted */}
      <main className="flex-1">{children}</main>
      <Footer className="text-center" />
    </div>
  );
}
