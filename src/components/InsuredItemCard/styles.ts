import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import { elevationShadowStyle } from '../../utils/ReactNativeUtils'

export const styles = StyleSheet.create({
  touchable: {
    margin: 10,
    backgroundColor: colors.white,
    ...elevationShadowStyle(2),
    borderRadius: 14,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    height: 262,
  },
  image: {
    width: '100%',
    height: 158,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  body: {
    borderTopColor: colors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  name: {
    marginTop: 15,
    marginHorizontal: 20,
    ...fonts.AvenirMedium,
    flex: 1,
  },
  price: {
    color: colors.blueyGrey,
    marginBottom: 16,
    marginHorizontal: 20,
    ...fonts.AvenirMedium,
  },
})
