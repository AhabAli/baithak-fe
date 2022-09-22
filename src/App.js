import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TeachersTable from './pages/teachers/TeachersTable';
import TeacherEntryForm from './pages/teachers/TeacherEntryForm';
import StudentsTable from './pages/students/StudentsTable';
import StudentEntryForm from './pages/students/StudentEntryForm';
import Variables from './pages/Variables';
import ViewSubjects from './pages/subjects/ViewSubjects';
import AddSubject from './pages/subjects/AddSubject';
import ViewSyllabus from './pages/syllabus/ViewSyllabus';
import AddSyllabus from './pages/syllabus/AddSyllabus';
import ViewClass from './pages/class/ViewClass';
import AddClass from './pages/class/AddClass';
import SchoolTable from './pages/school/SchoolTable';
import SchoolDetails from './pages/school/SchoolDetails';
import CreateUser from './pages/users/CreateUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/staff" element={<PrivateRoute> <TeachersTable /> </PrivateRoute>} />
        <Route path="/staffEntryForm" element={<PrivateRoute> <TeacherEntryForm /> </PrivateRoute>} />
        <Route path="/students" element={<PrivateRoute> <StudentsTable /> </PrivateRoute>} />
        <Route path="/studentsEntryForm" element={<PrivateRoute> <StudentEntryForm /> </PrivateRoute>} />
        <Route path="/createVariables" element={<PrivateRoute> <Variables /> </PrivateRoute>} />
        <Route path="/viewSubjects" element={<PrivateRoute> <ViewSubjects /> </PrivateRoute>} />
        <Route path="/addSubject" element={<PrivateRoute> <AddSubject /> </PrivateRoute>} />
        <Route path="/viewSyllabus" element={<PrivateRoute> <ViewSyllabus /> </PrivateRoute>} />
        <Route path="/addSyllabus" element={<PrivateRoute> <AddSyllabus /> </PrivateRoute>} />
        <Route path="/viewClass" element={<PrivateRoute> <ViewClass /> </PrivateRoute>} />
        <Route path="/addClass" element={<PrivateRoute> <AddClass /> </PrivateRoute>} />
        <Route path="/viewSchools" element={<PrivateRoute> <SchoolTable /> </PrivateRoute>} />
        <Route path="/schoolDetail/:id" element={<PrivateRoute> <SchoolDetails /> </PrivateRoute>} />
        <Route path="/createUser" element={<PrivateRoute> <CreateUser /> </PrivateRoute>} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App;
