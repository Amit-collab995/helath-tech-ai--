import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SymptomCheck from './pages/SymptomCheck';
import AnalysisResult from './pages/AnalysisResult';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';
import DoctorDirectory from './pages/DectorDirectory';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> Navbar har page par dikhega */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/check" element={<SymptomCheck />} />
        <Route path="/results" element={<AnalysisResult />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dectordirectory" element={<DoctorDirectory />} />
        
      </Routes>
    </Router>
  );
}

export default App;