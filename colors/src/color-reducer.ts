import { rgb } from 'color-convert';

// type HexColor = `#${string}`
// const isHexColor = (s:string): s is HexColor  => s.startsWith('#')
// type RGBString = `rgb(${number},${number},${number})`;
// type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv'
// type ActionTypes = `update-${ColorFormats}-color`

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

export const colorInitialState: ColorState = {
  hexColor: '#BADA55',
};

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction;

export const colorReducer = (
  state: ColorState = colorInitialState,
  action: AdjustColorActions,
) => {
  console.log(state);
  if (action.type === 'update-hex-color') {
    return { ...state, hexColor: action.payload.hexcolor };
  }
  if (action.type === 'update-RGB-color') {
    return { ...state, hexColor: '#' + rgb.hex(action.payload.rgb) };
  }
  return state;
};

export {};
