import "./assets/styles/App.css";
import "./assets/styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout";        // ⬅️ changed

// pages
import HomePage from "./components/pages/HomePage";                // ⬅️ changed
import QuizPage from "./components/pages/QuizPage";                // ⬅️ changed
import ResultPage from "./components/pages/ResultPage";            // ⬅️ changed

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;