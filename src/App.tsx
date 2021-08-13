import "./App.scss";
import { MainPage } from "./pages/main-page/mainPage";

function App(): JSX.Element {
  return (
    <>
      <header className="App-header">
        <h2>React.API.Pokemon</h2>
      </header>
      <main className="App-main">
        <MainPage />
      </main>
    </>
  );
}

export default App;
