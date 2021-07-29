import "./search-bar.scss";

export const SearchBar = (): JSX.Element => {
  return (
    <div className="App-searchBar">
      <label htmlFor="searchBar" className="App-searchBar__label">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          className="App-searchBar__input"
          placeholder="Search...."
        />
      </label>
    </div>
  );
};
