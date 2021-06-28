import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CUSTOMFONT_REGULAR = 'ProductSans-Regular';
const CUSTOMFONT_BOLD = 'ProductSans-Bold';

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  tabBar: '#121212',
  input: '#1D1D1D',
  blue: '#4096FE',
  gray: '#878787',
  gray1: '#666666',
  linear: ['#439DFEE8', '#F687FFE8'],
};
export const SIZES = {
  size1: 4,
  size2: 8,
  size3: 12,
  size4: 16,
  size5: 20,
  size6: 24,
  size7: 28,
  size8: 32,
  size9: 48,
  size10: 64,
  width,
  height,
};
export const FONTS = {
  h1: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.size8, lineHeight: 36 },
  h2: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.size6, lineHeight: 30 },
  h3: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.size5, lineHeight: 22 },
  h4: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.size4, lineHeight: 22 },
  regular: { fontFamily: CUSTOMFONT_REGULAR },
  bold: { fontFamily: CUSTOMFONT_BOLD },
};
