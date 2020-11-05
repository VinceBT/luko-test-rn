import * as React from 'react'
import { useCallback } from 'react'
import { Image, Text, TouchableOpacity, View, ViewProps } from 'react-native'

import { InsuredItem } from '../../mock/data/insured-items'
import { styles } from './styles'

type Props = {
  item: InsuredItem
  onPress?: Function
} & ViewProps

function InsuredItemCard(props: Props) {
  const { onPress, item, style, ...otherProps } = props

  const handlePress = useCallback(() => {
    onPress?.(item)
  }, [onPress, item])

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.touchable, style]}
      {...otherProps}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.body}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo<Props>(InsuredItemCard)
