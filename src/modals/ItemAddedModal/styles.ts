import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const markdownStyles = StyleSheet.create({
  text: {
    ...fonts.AvenirMedium,
    fontSize: 16,
    color: colors.blueyGrey,
  },
  strong: {
    ...fonts.AvenirHeavy,
    fontSize: 16,
    color: colors.blueyGrey,
  },
})

export const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: colors.modal,
    justifyContent: 'flex-end',
  },
  modalBody: {
    borderRadius: 15,
    backgroundColor: colors.white,
    paddingTop: 30,
    padding: 20,
    margin: 10,
  },
  modalLottieContainer: {
    width: 112,
    height: 112,
    alignSelf: 'center',
    position: 'relative',
  },
  modalLottie: {
    position: 'absolute',
    top: -35,
    left: -35,
    width: 250,
    height: 250,
  },
  modalTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    ...fonts.AvenirHeavy,
    fontSize: 20,
    color: colors.black,
    marginTop: 20,
  },
  modalText: {
    marginTop: 5,
  },
  modalConfirmButton: {
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  modalConfirmButtonText: {
    padding: 12,
    ...fonts.AvenirHeavy,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
})
