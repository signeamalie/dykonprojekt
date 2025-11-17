// her sætter vi hele appens routing op

import "./assets/styles/App.css";
import "./assets/styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout";
import CompareView from "./components/organisms/CompareView";


// sider
import HomePage from "./components/pages/HomePage";
import QuizPage from "./components/pages/QuizPage";
import ResultPage from "./components/pages/ResultPage";

function App() {
  return (
    // browserrouter gør at vi kan bruge <Link> og <Route>
    <BrowserRouter>
      {/* mainlayout har header og <main> rundt om alle sider */}
      <MainLayout>
        <Routes>
          {/* forside med hero + intro */}
          <Route path="/" element={<HomePage />} />
          {/* side med spørgsmål / quiz */}
          <Route path="/quiz" element={<QuizPage />} />
          {/* resultatside */}
          <Route path="/result" element={<ResultPage />} />
          {/* sammenligningsside */}
          <Route path="/compare" element={<CompareView />} />
       </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
