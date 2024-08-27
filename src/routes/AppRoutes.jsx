import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { CommunicationGames, ConcentrationGames, Grade1, Grade2, Grade3, Grade4, Grade5, Grade6, HomePage, InitialGrade, MathGames, MemoryGames } from '../pages';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/initial" element={<InitialGrade />} />
        <Route path="/grade-1" element={<Grade1 />}>
          <Route path="matematicas" element={<MathGames />} />
          <Route path="comunicacion" element={<CommunicationGames />} />
          <Route path="memoria" element={<MemoryGames />} />
          <Route path="concentracion" element={<ConcentrationGames />} />
        </Route>
        <Route path="/grade-2" element={<Grade2 />} />
        <Route path="/grade-3" element={<Grade3 />} />
        <Route path="/grade-4" element={<Grade4 />} />
        <Route path="/grade-5" element={<Grade5 />} />
        <Route path="/grade-6" element={<Grade6 />} />
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
};
