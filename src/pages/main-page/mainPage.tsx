import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardsContainer } from "../../components/cards-container/cards-container";
import { Pagination } from "../../components/pagination/pagination";
import { SearchBar } from "../../components/search-bar/searchBar";
import { Sort } from "../../components/sorter/sort";
import { LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../../utils/constants";
import { MainPageReducerHelper } from "./controller/mainPageReducerHelper";
import { getData } from "../../store/api/apiAsyncThunk";
import { InfiniteScroll } from "../../components/infiniteScroll";

export const MainPage: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    state,
    updatePokData,
    sorter,
    sortBy,
    addOneCard,
    totalCountHelper,
    setPage,
    setPageSize,
    changePage,
    searchPage,
    setInfiniteScroll,
  } = MainPageReducerHelper();

  // To-DO create custom useFetch

  useEffect(() => {
    dispatch(getData({ offset: OFFSET_PER_PAGE, limit: LIMIT_PER_PAGE }));
  }, [dispatch]);

  useEffect(() => {
    updatePokData();
  }, [updatePokData]);

  //  useEffect(() => {
  // TO-DO fix sorter
  sorter(state.cards, state.sortParam, state.sortConfig);
  //  }, [sorter, state.cards, state.sortParam, state.sortConfig])
  return (
    <>
      <section className="App-main__filters">
        <SearchBar
          state={state}
          changePage={changePage}
          searchPage={searchPage}
        />
        <Sort sortBy={sortBy} />
      </section>
      <section className="App-main__pagination">
        <div className="App-main__pagination__field-size">
          <label htmlFor="pageSize">
            Elements on page
            <select
              name="pageSize"
              id="pageSize"
              className="App-main__pagination__field-size--input"
              onChange={(ev) => setPageSize(Number(ev.target.value))}
              defaultValue={state.pageSize}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </label>
        </div>
        <Pagination
          totalCount={totalCountHelper()}
          currentPage={state.page}
          onPageChange={setPage}
          pageSize={state.pageSize}
          changePage={changePage}
          setInfiniteScroll={setInfiniteScroll}
        />
      </section>
      <InfiniteScroll
        pageNumber={state.page}
        loadNewPage={changePage}
        setNewPage={setPage}
        setInfiniteScroll={setInfiniteScroll}
      >
        <CardsContainer state={state.cards} updateCards={addOneCard} />
      </InfiniteScroll>
    </>
  );
};
