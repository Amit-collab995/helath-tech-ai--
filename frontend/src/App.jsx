import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SymptomCheck from './pages/SymptomCheck';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';
import ImageAnalysis from './pages/ImageAnalysis';



function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/check" element={<SymptomCheck />} />
       
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/imageanalysis" element={<ImageAnalysis/>} />
        
      </Routes>
    </Router>
  );
}

export default App;