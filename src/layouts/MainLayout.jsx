import { Outlet } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from '../components';

// Dentro del componente MainLayout
export const MainLayout = () => {
  return (
    <div className=" min-h-screen text-normal max-w-[1440px] mx-auto">
      <Header />
      
        <main className="flex-1 mx-auto">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
    </div>
  );
};
