export const SearchBar = (): JSX.Element => {
  return (
    <div className="App-searchBar">
      <label htmlFor="searchBar">
        Search
        <input type="text" name="searchBar" id="searchBar" />
      </label>
    </div>
  );
};
