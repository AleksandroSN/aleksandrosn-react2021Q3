import { useState } from "react";
import { PokemonDetailProps } from "../../api/interfaces";
import "./sort.scss";

interface SortProps {
  setSortParam: React.Dispatch<React.SetStateAction<keyof PokemonDetailProps>>;
  setSortCondig: React.Dispatch<React.SetStateAction<string>>;
}

export const Sort = ({
  setSortParam,
  setSortCondig,
}: SortProps): JSX.Element => {
  const [toogleSort, setToogleSort] = useState<boolean>(false);

  return (
    <>
      <div className="App-sort">
        <button type="button" onClick={() => setToogleSort((x) => !x)}>
          Sort icon
        </button>
        <ul
          className={
            toogleSort ? "App-sort__options" : "App-sort__options hide"
          }
        >
          Sort by
          <li>
            Number{" "}
            <button
              type="button"
              onClick={() => {
                setSortCondig("ASC");
                setSortParam("id");
              }}
            >
              ASC
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                setSortCondig("DESC");
                setSortParam("id");
              }}
            >
              DESC
            </button>
          </li>
          <li>
            Name{" "}
            <button
              type="button"
              onClick={() => {
                setSortCondig("ASC");
                setSortParam("name");
              }}
            >
              ASC
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                setSortCondig("DESC");
                setSortParam("name");
              }}
            >
              DESC
            </button>
          </li>
          <li>
            Type{" "}
            <button
              type="button"
              onClick={() => {
                setSortCondig("ASC");
                setSortParam("types");
              }}
            >
              ASC
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                setSortCondig("DESC");
                setSortParam("types");
              }}
            >
              DESC
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
