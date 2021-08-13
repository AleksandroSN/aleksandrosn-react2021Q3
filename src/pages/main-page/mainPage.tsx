import { useEffect } from "react";
import { getData } from "../../api/api";
import { CardsContainer } from "../../components/cards-container/cards-container";
import { Loader } from "../../components/loader/loader";
import { Pagination } from "../../components/pagination/pagination";
import { SearchBar } from "../../components/search-bar/searchBar";
import { Sort } from "../../components/sorter/sort";
import { LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../../utils/constants";
import { MainPageReducerHelper } from "./controller/mainPageReducerHelper";

export const MainPage = (): JSX.Element => {
  const {
    state,
    setLoader,
    setPaginationState,
    addPromises,
    sorter,
    sortBy,
    setCards,
    addOneCard,
    totalCountHelper,
    setPage,
    setPageSize,
    changePage,
    searchPage,
  } = MainPageReducerHelper();

  useEffect(() => {
    (async function getMocks() {
      const { results, next, previous, count } = await getData(
        OFFSET_PER_PAGE,
        LIMIT_PER_PAGE
      );
      setPaginationState(next, previous, count);
      addPromises(results);
    })();
  }, [setPaginationState, addPromises]);

  useEffect(() => {
    setLoader(true);
    Promise.all(state.cardsPromises).then((x) => setCards(x));
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [state.cardsPromises, setLoader, setCards]);

  sorter(state.sortParam);

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
        />
      </section>
      <section className="App-main__container">
        {state.loader ? (
          <Loader />
        ) : (
          <CardsContainer state={state.cards} updateCards={addOneCard} />
        )}
      </section>
    </>
  );
};
