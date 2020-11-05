import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const styles = StyleSheet.create({
  touchable: {
    backgroundColor: colors.white,
    borderRadius: 14,
    width: 128,
    height: 128,
  },
  empty: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: colors.blueyGreyAlpha,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  emptyText: {
    ...fonts.AvenirMedium,
    color: colors.black,
    fontSize: 16,
    marginTop: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    borderColor: colors.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
  },
})
