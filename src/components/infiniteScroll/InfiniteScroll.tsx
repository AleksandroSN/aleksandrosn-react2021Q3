import { FunctionComponent, useCallback, useRef } from "react";
import {
  useAppSelector,
  loadStatus,
  loadCompleteStatus,
} from "../../store/store";
import { InfiniteScrollProps } from "./types";

export const InfiniteScroll: FunctionComponent<InfiniteScrollProps> = ({
  children,
  loadNewPage,
  setNewPage,
  pageNumber,
  setInfiniteScroll,
}): JSX.Element => {
  const isLoading = useAppSelector(loadStatus);
  const isLoadComplete = useAppSelector(loadCompleteStatus);
  const observer = useRef<any>(null);
  const lastElem = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isLoadComplete) {
          loadNewPage(pageNumber + 1);
          setNewPage(pageNumber + 1);
          setInfiniteScroll(true);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading]
  );

  return (
    <>
      {children}
      <div id="bottom-hook" ref={lastElem}></div>
    </>
  );
};
