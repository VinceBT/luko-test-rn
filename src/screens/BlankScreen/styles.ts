import { StyleSheet } from 'react-native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...fonts.AvenirHeavy,
  },
})

export default styles
