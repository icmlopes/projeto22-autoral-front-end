import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoProvider from "./contexts/InfoContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { ToastContainer } from "react-toastify";
import LawyerPage from "./pages/LawyerPage";
import ClientPage from "./pages/ClientPage";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyle />
        <InfoProvider>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/lawyer" element={<LawyerPage />} />
            <Route path="/client" element={<ClientPage />} />
          </Routes>
        </InfoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
