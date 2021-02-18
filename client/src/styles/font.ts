type TWeight = {
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

type TSize = {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
  xxxxlarge: string;
};

interface IFont {
  size: TSize;
  weight: TWeight;
}

const font: IFont = {
  size: {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    xxxlarge: '24px',
    xxxxlarge: '36px',
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export default font;
