import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  label: {
    //
  },
  labelText: {
    color: colors.blueyGrey,
    ...fonts.AvenirMedium,
    fontSize: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: colors.black,
    ...fonts.AvenirMedium,
    fontSize: 16,
    overflow: 'hidden',
    textAlignVertical: 'top',
  },
  chevron: {
    marginLeft: 2,
  },
  underline: {
    height: 2,
    backgroundColor: colors.black,
  },
})
