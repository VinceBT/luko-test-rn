import * as React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export default function BlankScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty screen</Text>
    </View>
  )
}
