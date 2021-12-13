import { loadStatus, useAppSelector } from "../../store/store";
import "./loader.scss";

export const Loader = (): JSX.Element => {
  const isLoading = useAppSelector(loadStatus);
  return (
    <>
      {isLoading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};
