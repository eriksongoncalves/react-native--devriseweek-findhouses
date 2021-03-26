import { metrics } from './metrics';

export default {
  colors: {
    primary: '#594aff',
    backgroundLight: '#2c285b',
    backgroundDark: '#1e1d42',
    gray: '#e5e5e5',
    white: '#ffffff',
    purpleTransparent: 'rgba(45,40,91,0.64)',
    darkTransparent: 'rgba(18,16,37,0.59)'
  },
  metrics,
  font: {
    family: {
      regular: 'Montserrat_400Regular',
      medium: 'Montserrat_500Medium',
      semibold: 'Montserrat_600SemiBold',
      bold: 'Montserrat_700Bold'
    }
  }
} as const;
