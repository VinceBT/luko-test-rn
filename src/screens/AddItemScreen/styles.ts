import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navBar: {
    height: 44,
    borderBottomColor: colors.background,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  closeButton: {
    //
  },
  closeIcon: {
    marginRight: 10,
  },
  title: {
    ...fonts.AvenirHeavy,
    fontSize: 16,
    color: colors.black,
  },
  saveButton: {
    marginLeft: 10,
  },
  saveText: {
    ...fonts.AvenirHeavy,
    fontSize: 16,
    color: colors.blueyGrey,
  },
  saveTextActive: {
    color: colors.blue,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  imagePickerTop: {
    alignSelf: 'center',
    marginTop: 40,
  },
  inputField: {
    marginTop: 20,
  },
  inputFieldError: {
    marginTop: 6,
    ...fonts.AvenirHeavy,
    fontSize: 12,
    color: colors.red,
  },
  label: {
    color: colors.blueyGrey,
    ...fonts.AvenirMedium,
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  documentsRow: {
    flexDirection: 'row',
  },
  imagePicker: {
    marginRight: 20,
  },
})
