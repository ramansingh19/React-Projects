import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/login";
import SignupPage from "./Pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
