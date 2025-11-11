import Header from "../molecules/Header";
import ResultList from "../organisms/ResultList";

export default function ResultPage() {
  return (
    <>
      <Header />
      <main className="page page--result">
        <h1>Resultat</h1>
        <ResultList />
      </main>
    </>
  );
}