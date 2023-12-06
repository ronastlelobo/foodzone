import AppConstants from './AppConstants';

export const Theme = {
  colors: {
    white: '#FFFFFF',
    primary: '#000000',
    black: '#000000',
    grey: '#848484',
  },
  fonts: AppConstants.IS_IOS
    ? {
        bold: 'Sk-Modernist-Bold',
        regular: 'Sk-Modernist-Regular',
      }
    : {
        bold: 'Sk-Modernist-Bold',
        regular: 'Sk-Modernist-Regular',
      },
};
