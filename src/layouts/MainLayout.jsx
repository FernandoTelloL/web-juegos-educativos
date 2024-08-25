import { Outlet } from 'react-router-dom';
import { Header, HeroImage } from '../components';

// Dentro del componente MainLayout
export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroImage />
      <main className="flex-1 container mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12 lg:py-8 xl:max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
};
