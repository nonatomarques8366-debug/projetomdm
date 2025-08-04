import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  useEffect(() => {
    // Chamada da API de boas-vindas
    const helloWorldApi = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log(response.data.message);
      } catch (e) {
        console.error(e, "errored out requesting / api");
      }
    };

    helloWorldApi();

    // Remover badge da Emergent
    const badge = document.getElementById("emergent-badge");
    if (badge) {
      badge.remove();
    }
  }, []);

  return <LandingPage />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
