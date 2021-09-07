// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    spacing: Spacing;
    measures: Spacing;
  }
}

interface Spacing {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

interface Colors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
  'grey-100': string;
  'grey-200': string;
  'grey-300': string;
  'grey-400': string;
  'grey-500': string;
}
