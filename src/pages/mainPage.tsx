import { useEffect, useState } from "react";
import { getData, getDetailData } from "../api/api";
import { PokemonDetailProps } from "../api/interfaces";
import { CardsContainer } from "../components/cards-container/cards-container"
import { SearchBar } from "../components/search-bar/searchBar"

export const MainPage = (): JSX.Element => {
  const [state, setState] = useState<PokemonDetailProps[]>([]);
  const [promises, setPromises] = useState<Promise<PokemonDetailProps>[]>([]);

  useEffect(() => {
    (async function getMocks() {
      const data = await getData();
      data.results.forEach(({name}) => {
        const pokemonReq = getDetailData(name);
        setPromises(newState => [...newState,pokemonReq])
      })      
    })();
  }, []);

  useEffect(() => {
    Promise.all(promises).then(x => setState(x));
  }, [promises]);

  const updateCards = (modState: PokemonDetailProps) => {
    setState((oldState) => [modState, ...oldState]);
  };


  return (
    <>
      <SearchBar state={state} updateCards={updateCards}/>
      <CardsContainer state={state} updateCards={updateCards}/>
    </>
  )
}