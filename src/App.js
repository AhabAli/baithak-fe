import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TeachersTable from './pages/teachers/TeachersTable';
import TeacherEntryForm from './pages/teachers/TeacherEntryForm';
import StudentsTable from './pages/students/StudentsTable';
import StudentEntryForm from './pages/students/StudentEntryForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/teachers" element={<PrivateRoute> <TeachersTable /> </PrivateRoute>} />
        <Route path="/teachersEntryForm" element={<PrivateRoute> <TeacherEntryForm /> </PrivateRoute>} />
        <Route path="/students" element={<PrivateRoute> <StudentsTable /> </PrivateRoute>} />
        <Route path="/studentsEntryForm" element={<PrivateRoute> <StudentEntryForm /> </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App;
