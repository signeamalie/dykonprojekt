import "./assets/styles/App.css";
import "./assets/styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./data/components/templates/MainLayout";

// pages
import HomePage from "./data/components/pages/HomePage";
import QuizPage from "./data/components/pages/QuizPage";
import ResultPage from "./data/components/pages/ResultPage";

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
