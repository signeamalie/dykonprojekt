import "./assets/styles/App.css";
import "./assets/styles/main.scss";
import DykonButton from "./data/components/atoms/Button";

function App() {
  return (
    <>
      <main>
        <h1>Flora Danica</h1>
        <DykonButton
          label="START"
          variant="primary"
          onClick={() => console.log("Navigate to quiz page")} //console.log temporary - navigate to quiz page
        />
      </main>
    </>
  );
}

export default App;
