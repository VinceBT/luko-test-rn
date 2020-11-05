import { EvilIcons, Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import { useCallback } from 'react'
import { TextInput, TouchableOpacity, View, ViewProps } from 'react-native'

import colors from '../../global/colors'
import hitSlops from '../../global/constants'
import { styles } from './styles'

type Props = {
  value: string
  onChange: Function
} & ViewProps

function SearchBar(props: Props) {
  const { value = '', onChange, style, ...otherProps } = props

  const handleValueChange = useCallback(
    (nextValue) => {
      onChange?.(nextValue)
    },
    [onChange]
  )

  const handleEmptySearch = useCallback(() => {
    onChange?.('')
  }, [onChange])

  return (
    <View style={[styles.container, style]} {...otherProps}>
      <EvilIcons
        name="search"
        size={24}
        color={colors.blueyGrey}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        underlineColorAndroid="transparent"
        selectionColor={colors.blueAlpha}
        selectTextOnFocus
        value={value}
        onChangeText={handleValueChange}
      />
      {value.length !== 0 && (
        <TouchableOpacity
          style={styles.emptyButton}
          hitSlop={hitSlops.standard}
          onPress={handleEmptySearch}
        >
          <Ionicons
            name="ios-close-circle"
            size={20}
            color={colors.blueyGrey}
            style={styles.emptyIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default React.memo<Props>(SearchBar)
