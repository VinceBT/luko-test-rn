import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import { elevationShadowStyle } from '../../utils/ReactNativeUtils'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topBar: {
    height: 180,
    backgroundColor: colors.white,
    ...elevationShadowStyle(1),
    paddingHorizontal: 20,
    paddingBottom: 11,
    justifyContent: 'flex-end',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    ...fonts.AvenirHeavy,
    fontSize: 34,
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    width: 12,
    height: 12,
  },
  searchBar: {
    marginTop: 2,
  },
  list: {
    flex: 1,
    backgroundColor: colors.background,
  },
  noResultContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultText: {
    ...fonts.AvenirHeavy,
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 50,
  },
  columnWrapper: {
    //
  },
  listItem: {
    flex: 1,
  },
})
