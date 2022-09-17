import logo from './logo.svg';
import './App.css';
import Authpage from './pages/Authpage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserDashboard from './pages/UserDashboard';
import AdminPanel from './pages/AdminPanel';
import Pagetest from './pages/Pagetest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authpage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
