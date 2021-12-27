import { loadStatus, useAppSelector } from "../../store/store";
import { Overlay, StyledLoader } from "./styled-loader";

export const Loader = (): JSX.Element => {
  const isLoading = useAppSelector(loadStatus);
  return (
    <>
      {isLoading && (
        <Overlay>
          <StyledLoader></StyledLoader>
        </Overlay>
      )}
    </>
  );
};
