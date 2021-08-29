import { render as rtlRender} from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { store } from "../src/store/store";
import { apiReducer, ApiReducerState } from "../src/store/api/apiReducer"

interface RtlRenderProps {
  preloadedState: ApiReducerState;
  
}

const Wrapper: React.FC = (children) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export function renderWithRedux(
  ui: JSX.Element,
  {
    preloadedState = {} ,
    store = configureStore({ reducer: apiReducer.reducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}