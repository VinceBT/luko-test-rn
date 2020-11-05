import { Entypo } from '@expo/vector-icons'
import moment from 'moment'
import * as React from 'react'
import { useCallback, useMemo, useState } from 'react'
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import RNPickerSelect from 'react-native-picker-select'

import colors from '../../global/colors'
import { ISODateFormat } from '../../global/constants'
import { InputModes } from './constants'
import { styles } from './styles'

type Props = {
  label?: string
  value?: string
  onChange?: Function
  values?: string[]
  mode?: InputModes
  textInputProps?: TextInputProps
  textInputMaskProps?: TextInputMaskProps
} & ViewProps

function InputField(props: Props) {
  const {
    label,
    value,
    onChange,
    values = [],
    mode = InputModes.TEXT,
    style,
    textInputProps = null,
    textInputMaskProps = null,
    ...otherProps
  } = props

  const [currentValue, setCurrentValue] = useState(value)
  const [isEmpty, setIsEmpty] = useState(!value)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const handleChange = useCallback(
    (nextValue) => {
      setCurrentValue(nextValue)
      onChange?.(nextValue)
      setTimeout(() => {
        setIsEmpty(!nextValue) // To prevent animation from being cut by the setState
      }, 0)
    },
    [onChange]
  )

  const input = useMemo(() => {
    const baseProps: TextInputProps = {
      onChangeText: handleChange,
      style: styles.input,
      value: currentValue,
      underlineColorAndroid: 'transparent',
      selectionColor: colors.blueAlpha,
      selectTextOnFocus: true,
    }
    if (textInputMaskProps) {
      return (
        <TextInputMask
          {...baseProps}
          {...textInputProps}
          {...textInputMaskProps}
        />
      )
    }
    return <TextInput {...baseProps} {...textInputProps} />
  }, [currentValue, handleChange, textInputMaskProps, textInputProps])

  const rowInput = useMemo(() => {
    return (
      <View
        style={styles.inputRow}
        pointerEvents={mode === InputModes.TEXT ? 'auto' : 'none'}
      >
        {input}
        {mode === InputModes.SELECT && (
          <View style={styles.chevron}>
            <Entypo name="chevron-down" size={18} color={colors.blueyGrey} />
          </View>
        )}
      </View>
    )
  }, [input, mode])

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    hideDatePicker()
    handleChange(moment(date).format(ISODateFormat))
  }

  return (
    <View style={[styles.container, style]} {...otherProps}>
      <Animatable.View
        useNativeDriver
        duration={200}
        transition={['translateY']}
        pointerEvents="none"
        style={[
          styles.label,
          isEmpty
            ? { transform: [{ translateY: 37 }] }
            : { transform: [{ translateY: 0 }] },
        ]}
      >
        <Text style={styles.labelText}>{label}</Text>
      </Animatable.View>
      {mode === InputModes.DATE ? (
        <>
          <TouchableOpacity onPress={showDatePicker}>
            {rowInput}
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={
              currentValue
                ? moment(currentValue, ISODateFormat).toDate()
                : new Date()
            }
            maximumDate={moment().add(1, 'hour').toDate()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </>
      ) : mode === InputModes.TEXT ? (
        rowInput
      ) : (
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          value={currentValue}
          onValueChange={handleChange}
          items={
            values?.map((valueIterator) => ({
              label: valueIterator,
              value: valueIterator,
            })) ?? []
          }
        >
          {rowInput}
        </RNPickerSelect>
      )}
      <Animatable.View
        useNativeDriver
        duration={200}
        transition={['scaleY']}
        style={[
          styles.underline,
          isEmpty
            ? {
                transform: [{ scaleY: 0.5 }],
                backgroundColor: colors.lightPeriwinkle,
              }
            : {
                transform: [{ scaleY: 1 }],
                backgroundColor: colors.blue,
              },
        ]}
      />
    </View>
  )
}

export default React.memo<Props>(InputField)
