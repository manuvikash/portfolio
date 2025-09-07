import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-enter page-enter-active min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  );
}
