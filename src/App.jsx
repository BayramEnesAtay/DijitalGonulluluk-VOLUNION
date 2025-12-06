import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/FirstPage.jsx";
import VolunteerLogin from "./pages/ValunteeryLogIn.jsx";
import VolunteerSignUp from "./pages/ValunteerySignUp.jsx";
import CompanyLogin from "./pages/CompanyLogIn.jsx";
import CompanySignUp from "./pages/CompanySignUp.jsx";
import VolunteerDashboard from "./pages/VolunteerDashboard.jsx";
import CompanyDashboard from "./pages/CompanyDashboard.jsx";
//import VolunteerSignUp from "./pages/ValunteerySignUp.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-signup" element={<VolunteerSignUp />} />
        <Route path="/company-signup" element={<CompanySignUp />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
