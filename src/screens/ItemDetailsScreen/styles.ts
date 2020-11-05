import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  safeAreaView: {
    position: 'absolute',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingBottom: 40,
  },
  bigImage: {
    height: 375,
    width: '100%',
  },
  closeButton: {
    margin: 20,
    marginTop: 10,
  },
  closeButtonIcon: {
    opacity: 0.2,
  },
  body: {
    borderTopColor: colors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 20,
  },
  category: {
    ...fonts.AvenirHeavy,
    fontSize: 14,
    color: colors.grey,
    textTransform: 'uppercase',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  name: {
    ...fonts.AvenirHeavy,
    color: colors.black,
    fontSize: 26,
    flex: 1,
  },
  editButton: {
    marginBottom: 8,
  },
  editButtonIcon: {
    //
  },
  section: {
    ...fonts.AvenirMedium,
    marginTop: 20,
    fontSize: 20,
    color: colors.black,
  },
  infoRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    flex: 1,
    ...fonts.AvenirMedium,
    color: colors.blueyGrey,
  },
  infoValue: {
    ...fonts.AvenirMedium,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lightPeriwinkle,
    marginTop: 20,
  },
  document: {
    marginTop: 10,
    width: 128,
    height: 128,
    borderRadius: 12,
    borderColor: colors.background,
    borderWidth: StyleSheet.hairlineWidth,
  },
})
