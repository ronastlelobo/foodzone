import AppConstants from './AppConstants';

export const Theme = {
  colors: {
    white: '#FFFFFF',
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
