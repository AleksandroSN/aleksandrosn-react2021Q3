import "./App.scss";
import { CardsContainer } from "./components/cards-container/cards-container";
import { SearchBar } from "./components/search-bar/searchBar";

function App(): JSX.Element {
  return (
    <>
      <header className="App-header">
        <h2>React.Component.Pokemon</h2>
      </header>
      <main className="App-main">
        <SearchBar />
        <CardsContainer />
      </main>
    </>
  );
}

export default App;
