import { StyleSheet } from 'react-native'

import colors from '../../global/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    flex: 1,
  },
  safeAreaView: {
    position: 'absolute',
  },
  closeButton: {
    margin: 20,
    marginTop: 10,
  },
  closeButtonIcon: {
    opacity: 0.5,
  },
})

export default styles
