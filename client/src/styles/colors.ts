type TBlack = {
  lighten: string;
  darken: string;
};

type TBlue = { lighten: string; darken: string };

type TGray = {
  lighten: string;
  regular: string;
  darken: string;
};

interface IColor {
  black: TBlack;
  blue: TBlue;
  gray: TGray;
  yellow: string;
  white: string;
}

const color: IColor = {
  black: {
    lighten: ' rgba(0, 0, 0, 0.8)',
    darken: 'rgba(0, 0, 0, 0.45)',
  },
  blue: { lighten: '#3483fa', darken: '#1f4e96' },
  gray: {
    lighten: '#ededed',
    regular: '#666',
    darken: '#333',
  },
  yellow: '#fff059',
  white: '#fff',
};

export default color;
