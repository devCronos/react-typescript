import { rgb } from 'color-convert';

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexcolor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-RGB-color';
  payload: {
    rgb: [number, number, number];
  };
};

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction;

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    return { ...state, hexColor: action.payload.hexcolor };
  }
  if (action.type === 'update-RGB-color') {
    return { ...state, hexColor: '#' + rgb.hex(action.payload.rgb) };
  }
  return state;
};

export {};
