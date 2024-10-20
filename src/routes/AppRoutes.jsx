import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import {  AllGrade2, AllGrade3, AllGrade4, AllGrade5, AllGrade6, CommunicationGamesGrade1, CommunicationGamesGrade2, CommunicationGamesGrade3, CommunicationGamesGrade4, CommunicationGamesGrade5, CommunicationGamesGrade6, EntertainmentGrade1, EntertainmentGrade2, EntertainmentGrade3, EntertainmentGrade4, EntertainmentGrade5, EntertainmentGrade6, Grade1, Grade2, Grade3, Grade4, Grade5, Grade6, HomePage, InitialGrade, MathGamesGrade1, MathGamesGrade2, MathGamesGrade3, MathGamesGrade4, MathGamesGrade5, MathGamesGrade6, MathGamesInitial, MemoryGamesInitial, OtherGamesGrade1, OtherGamesGrade2, OtherGamesGrade3, OtherGamesGrade4, OtherGamesGrade5, OtherGamesGrade6, TodoGrade1 } from '../pages';


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
          <Route path="todo-grade1" element={<TodoGrade1 />} />
          <Route path="matematicas-grade1" element={<MathGamesGrade1 />} />
          <Route path="comunicacion-grade1" element={<CommunicationGamesGrade1 />} />
          <Route path="otros-grade1" element={<OtherGamesGrade1 />} />
          <Route path="entretenimiento-grade1" element={<EntertainmentGrade1/>} />
        </Route>

        <Route path="/grade-2" element={<Grade2 />} >
          <Route path="todo-grade2" element={<AllGrade2 />} />
          <Route path="matematicas-grade2" element={<MathGamesGrade2 />} />
          <Route path="comunicacion-grade2" element={<CommunicationGamesGrade2/>} />
          <Route path="otros-grade2" element={<OtherGamesGrade2/>} />
          <Route path="entretenimiento-grade2" element={<EntertainmentGrade2/>} />
        </Route>

        <Route path="/grade-3" element={<Grade3 />} >
          <Route path="todo-grade3" element={<AllGrade3 />} />
          <Route path="matematicas-grade3" element={<MathGamesGrade3 />} />
          <Route path="comunicacion-grade3" element={<CommunicationGamesGrade3/>} />
          <Route path="otros-grade3" element={<OtherGamesGrade3/>} />
          <Route path="entretenimiento-grade3" element={<EntertainmentGrade3/>} />
        </Route>

        <Route path="/grade-4" element={<Grade4 />} >
          <Route path="todo-grade4" element={<AllGrade4 />} />
          <Route path="matematicas-grade4" element={<MathGamesGrade4 />} />
          <Route path="comunicacion-grade4" element={<CommunicationGamesGrade4/>} />
          <Route path="otros-grade4" element={<OtherGamesGrade4/>} />
          <Route path="entretenimiento-grade4" element={<EntertainmentGrade4/>} />
        </Route>

        <Route path="/grade-5" element={<Grade5 />} >
          <Route path="todo-grade5" element={<AllGrade5/>} />
          <Route path="matematicas-grade5" element={<MathGamesGrade5 />} />
          <Route path="comunicacion-grade5" element={<CommunicationGamesGrade5/>} />
          <Route path="otros-grade5" element={<OtherGamesGrade5/>} />
          <Route path="entretenimiento-grade5" element={<EntertainmentGrade5/>} />
        </Route>

        <Route path="/grade-6" element={<Grade6 />} >
          <Route path="todo-grade6" element={<AllGrade6/>} />
          <Route path="matematicas-grade6" element={<MathGamesGrade6 />} />
          <Route path="comunicacion-grade6" element={<CommunicationGamesGrade6/>} /> 
          <Route path="otros-grade6" element={<OtherGamesGrade6/>} /> 
          <Route path="entretenimiento-grade6" element={<EntertainmentGrade6/>} />
        </Route>


        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
};
