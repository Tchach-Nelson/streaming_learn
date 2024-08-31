import Login from './pages/login/Login' ;
import CreateAccount from './pages/createAccount/CreateAccount';
import StudentDashbord from './pages/studentDashbord/StudentDashbord';
import Acceuil from './pages/studentDashbord/acceuil/Acceuil';
import MyProfil from './pages/studentDashbord/myProfil/MyProfil';
import Cours from './pages/studentDashbord/cours/Cours';
import EmploiDuTemps from './pages/studentDashbord/emploiDuTemps/EmploiDuTemps';
import Chat from './pages/studentDashbord/Chat/Chat';
import Scolarite from './pages/studentDashbord/scolarite/Scolarite';
import Notes from './pages/studentDashbord/notes/Notes';

import TeacherDashbord from './pages/teacherDashbord/TeacherDashbord' ;
import AcceuilProf from './pages/teacherDashbord/acceuil/Acceuil';
import MyProfilProf from './pages/teacherDashbord/myProfil/MyProfil';
import CoursProf from './pages/teacherDashbord/cours/Cours';
import EmploiDuTempsProf from './pages/teacherDashbord/emploiDuTemps/EmploiDuTemps';
import ChatProf from './pages/teacherDashbord/Chat/Chat';
import ScolariteProf from './pages/teacherDashbord/scolarite/Scolarite';
import NotesProf from './pages/teacherDashbord/notes/Notes';

import { createBrowserRouter, RouterProvider } from "react-router-dom";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/createAccount",
        element: <CreateAccount />,
    },
    {
        path: "/studentDashbord",
        element: <StudentDashbord />,
        children: [
            {
              path: "/studentDashbord",
              element: <Acceuil />
            },
            {
              path: "/studentDashbord/myProfil",
              element: <MyProfil />
            },
            {
              path: "/studentDashbord/emploiDuTemps",
              element: <EmploiDuTemps />
            },
            {
              path: "/studentDashbord/cours",
              element: <Cours />
            },
            {
              path: "/studentDashbord/chat",
              element: <Chat />
            },
            {
              path: "/studentDashbord/scolarite",
              element: <Scolarite />
            },
            {
              path: "/studentDashbord/notes",
              element: <Notes />
            }
          ]
    },
    {
      path: "/teacherDashbord",
      element: <TeacherDashbord/>,
      children: [
        {
          path: "/teacherDashbord",
          element: <AcceuilProf />
        },
        {
          path: "/teacherDashbord/myProfil",
          element: <MyProfilProf />
        },
        {
          path: "/teacherDashbord/emploiDuTemps",
          element: <EmploiDuTempsProf />
        },
        {
          path: "/teacherDashbord/cours",
          element: <CoursProf />
        },
        {
          path: "/teacherDashbord/chat",
          element: <ChatProf />
        },
        {
          path: "/teacherDashbord/scolarite",
          element: <ScolariteProf />
        },
        {
          path: "/teacherDashbord/notes",
          element: <NotesProf />
        }
      ]
    }

  ])


function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;