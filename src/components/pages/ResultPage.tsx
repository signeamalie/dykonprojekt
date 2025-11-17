import ResultList from "../organisms/ResultList";
import { useLocation } from "react-router-dom";

// type til den state vi sender videre fra Questionnaire
type LocationState = {
  answers?: Record<number, string>;
};

export default function ResultPage() {
  // henter state der er sendt med fra Questionnaire
  const location = useLocation();
  const state = location.state as LocationState | null;
  const answers = state?.answers ?? {}; // fallback hvis man går direkte ind på /result

  return (
    // headeren kommer fra MainLayout, så her har vi kun selve sidens indhold
    <main className="page page--result">
      <h1>Resultat</h1>
      <ResultList answers={answers} />
    </main>
  );
}