import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 7,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    margin: 3,
    marginRight: 10,
    marginTop: 0,
  },
  emptyButton: {
    //
  },
  emptyIcon: {
    marginRight: 3,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    ...fonts.AvenirMedium,
  },
})
