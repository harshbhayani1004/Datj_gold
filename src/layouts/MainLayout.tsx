import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/FooterRedesign';

export default function MainLayout() {
  const location = useLocation();
  const hasPageHeader =
    location.pathname === '/' ||
    location.pathname.startsWith('/collection') ||
    location.pathname === '/wishlist' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f2ea] font-sans text-[#1c2b36] selection:bg-[#c2aa78]/40">
      <Navbar />
      <main className={`flex-grow ${hasPageHeader ? '' : 'pt-[104px]'}`}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
