import "./App.scss";
import { MainPage } from "./pages/mainPage";

function App(): JSX.Element {
  return (
    <>
      <header className="App-header">
        <h2>React.Component.Pokemon</h2>
      </header>
      <main className="App-main">
        <MainPage />
      </main>
    </>
  );
}

export default App;
