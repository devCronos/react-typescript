import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  colorInitialState,
} from './color-reducer';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#FFADEF',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, colorInitialState);
  return (
    <ColorContext.Provider value={{ hexColor: state.hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
