import { Outlet } from 'react-router-dom';
import { Header, HeroImage } from '../components';

// Dentro del componente MainLayout
export const MainLayout = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <HeroImage />
        <main className="flex-1 mx-auto">
          <Outlet />
        </main>
    </div>
  );
};
