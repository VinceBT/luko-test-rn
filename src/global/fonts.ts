import { TextProps } from 'react-native'

type fontFamilyName = 'Avenir-Medium' | 'Avenir-Heavy'

const fonts: { [key: string]: { fontFamily: fontFamilyName } & TextProps } = {
  AvenirMedium: { fontFamily: 'Avenir-Medium' },
  AvenirHeavy: { fontFamily: 'Avenir-Heavy' },
}

export const loadConfig: { [key in fontFamilyName]: any } = {
  'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.ttf'),
  'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.ttf'),
}

export default fonts
