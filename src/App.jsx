import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/FirstPage.jsx";     
import VolunteerLogin from "./pages/ValunteeryLogIn.jsx";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
