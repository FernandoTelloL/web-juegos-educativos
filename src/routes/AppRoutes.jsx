import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import {  CommunicationGamesGrade1, CommunicationGamesGrade2, EntertainmentGrade1, Grade1, Grade2, Grade3, Grade4, Grade5, Grade6, HomePage, InitialGrade, MathGamesGrade1, MathGamesGrade2, MathGamesInitial, MemoryGamesInitial, OtherGamesGrade1 } from '../pages';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />

        <Route path="/initial" element={<InitialGrade />} >
          <Route path="matematicas-initial" element={<MathGamesInitial />} />
          {/* TODO: MODIFICAR RUTA DE COMMUNICATION GAMES */}
          <Route path="comunicacion-initial" element={<CommunicationGamesGrade1 />} />
          <Route path="memoria-initial" element={<MemoryGamesInitial />} />
          {/* <Route path="concentracion-initial" element={<ConcentrationGames />} /> */}
        </Route>

        <Route path="/grade-1" element={<Grade1 />}>
          <Route path="matematicas-grade1" element={<MathGamesGrade1 />} />
          <Route path="comunicacion-grade1" element={<CommunicationGamesGrade1 />} />
          <Route path="otros-grade1" element={<OtherGamesGrade1 />} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>

        <Route path="/grade-2" element={<Grade2 />} >
          <Route path="matematicas-grade2" element={<MathGamesGrade2 />} />
          <Route path="comunicacion-grade2" element={<CommunicationGamesGrade2/>} />
          <Route path="otros-grade1" element={<OtherGamesGrade1/>} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>

        <Route path="/grade-3" element={<Grade3 />} >
        {/* TODO: MODIFICAR LAS RUTAS DE LAS MATEMATICAS DE LA GRADO 3 */}
          <Route path="matematicas-grade2" element={<MathGamesGrade2 />} />
          {/* TODO: Modificar la ruta de la comunicación de la grado 3 */}
          <Route path="comunicacion-grade2" element={<CommunicationGamesGrade2/>} />
          <Route path="otros-grade1" element={<OtherGamesGrade1/>} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>

        <Route path="/grade-4" element={<Grade4 />} >
        {/* TODO: MODIFICAR LAS RUTAS DE LAS MATEMATICAS DE LA GRADO 4 */}
          <Route path="matematicas-grade2" element={<MathGamesGrade2 />} />
          {/* TODO: Modificar la ruta de la comunicación de la grado 4 */}
          <Route path="comunicacion-grade2" element={<CommunicationGamesGrade2/>} />
          <Route path="otros-grade1" element={<OtherGamesGrade1/>} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>

        <Route path="/grade-5" element={<Grade5 />} >
        {/* TODO: MODIFICAR LAS RUTAS DE LAS MATEMATICAS DE LA GRADO 5 */}
        <Route path="matematicas-grade2" element={<MathGamesGrade2 />} />
        <Route path="comunicacion-grade2" element={<CommunicationGamesGrade2/>} />
          <Route path="otros-grade1" element={<OtherGamesGrade1/>} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>

        <Route path="/grade-6" element={<Grade6 />} >
        {/* TODO: MODIFICAR LAS RUTAS DE LAS MATEMATICAS DE LA GRADO 6 */}
        <Route path="matematicas-grade2" element={<MathGamesGrade2 />} />
        <Route path="comunicacion-grade2" element={<CommunicationGamesGrade2/>} />
          <Route path="otros-grade1" element={<OtherGamesGrade1/>} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>


        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
};
