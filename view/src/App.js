import logo from './logo.svg';
import './App.css';
import Authpage from './pages/Authpage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authpage />} />
        <Route path="/dash" element={<UserDashboard />} />
        {/* <Route path="/createjobform" element={<SimpleFrom2 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
