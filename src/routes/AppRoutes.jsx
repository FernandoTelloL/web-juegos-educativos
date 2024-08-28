import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { CommunicationGames, ConcentrationGames, Grade1, Grade2, Grade3, Grade4, Grade5, Grade6, HomePage, InitialGrade, MathGames, MathGamesInitial, MemoryGames, MemoryGamesInitial } from '../pages';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />

        <Route path="/initial" element={<InitialGrade />} >
          <Route path="matematicas-initial" element={<MathGamesInitial />} />
          <Route path="comunicacion-initial" element={<CommunicationGames />} />
          <Route path="memoria-initial" element={<MemoryGamesInitial />} />
          <Route path="concentracion-initial" element={<ConcentrationGames />} />
        </Route>

        <Route path="/grade-1" element={<Grade1 />}>
          <Route path="matematicas-grade1" element={<MathGames />} />
          <Route path="comunicacion-grade1" element={<CommunicationGames />} />
          <Route path="memoria-grade1" element={<MemoryGames />} />
          <Route path="concentracion-grade1" element={<ConcentrationGames />} />
        </Route>

        <Route path="/grade-2" element={<Grade2 />} >
          <Route path="matematicas-grade2" element={<MathGames />} />
          <Route path="comunicacion-grade2" element={<CommunicationGames />} />
          <Route path="memoria-grade2" element={<MemoryGames />} />
          <Route path="concentracion-grade2" element={<ConcentrationGames />} />
        </Route>

        <Route path="/grade-3" element={<Grade3 />} >
          <Route path="matematicas-grade3" element={<MathGames />} />
          <Route path="comunicacion-grade3" element={<CommunicationGames />} />
          <Route path="memoria-grade3" element={<MemoryGames />} />
          <Route path="concentracion-grade3" element={<ConcentrationGames />} />
        </Route>

        <Route path="/grade-4" element={<Grade4 />} >
          <Route path="matematicas-grade3" element={<MathGames />} />
          <Route path="comunicacion-grade3" element={<CommunicationGames />} />
          <Route path="memoria-grade3" element={<MemoryGames />} />
          <Route path="concentracion-grade3" element={<ConcentrationGames />} />
        </Route>

        <Route path="/grade-5" element={<Grade5 />} >
          <Route path="matematicas-grade3" element={<MathGames />} />
          <Route path="comunicacion-grade3" element={<CommunicationGames />} />
          <Route path="memoria-grade3" element={<MemoryGames />} />
          <Route path="concentracion-grade3" element={<ConcentrationGames />} />
        </Route>

        <Route path="/grade-6" element={<Grade6 />} />
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
};
