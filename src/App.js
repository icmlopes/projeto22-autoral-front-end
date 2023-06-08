import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoProvider from "./contexts/InfoContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";

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
          </Routes>
        </InfoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
