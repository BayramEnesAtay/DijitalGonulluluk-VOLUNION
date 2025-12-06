import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/FirstPage.jsx";
import VolunteerLogin from "./pages/ValunteeryLogIn.jsx";
import VolunteerSignUp from "./pages/ValunteerySignUp.jsx";
//import VolunteerSignUp from "./pages/ValunteerySignUp.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-signup" element={<VolunteerSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
