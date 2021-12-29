import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../../utils/constants";
import { MainPageReducerHelper } from "./controller/mainPageReducerHelper";
import { getData } from "../../store/api/apiAsyncThunk";
import {
  Filters,
  CardsContainer,
  Pagination,
  InfiniteScroll,
} from "../../components";

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
      <Filters
        changePage={changePage}
        pageNumber={state.page}
        searchPage={searchPage}
        sortBy={sortBy}
      />
      <Pagination
        totalCount={totalCountHelper()}
        currentPage={state.page}
        onPageChange={setPage}
        pageSize={state.pageSize}
        changePage={changePage}
        setInfiniteScroll={setInfiniteScroll}
        setPageSize={setPageSize}
      />
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
