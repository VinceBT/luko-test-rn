import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useCallback, useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ImagePickerModes } from '../../components/ImagePickerButton/constants'
import ImagePickerButton from '../../components/ImagePickerButton/ImagePickerButton'
import { InputModes } from '../../components/InputField/constants'
import InputField from '../../components/InputField/InputField'
import colors from '../../global/colors'
import { store } from '../../store'
import { addItem, AddItemFormData } from './constants'
import { styles } from './styles'

export default function AddItemScreen() {
  const navigation = useNavigation()

  const { control, handleSubmit, errors, formState } = useForm<AddItemFormData>(
    { mode: 'onChange' }
  )

  const { dispatch } = useContext(store)

  const onSubmit = useCallback(
    (formData) => {
      if (formState.isValid) {
        const newItemId = Math.random() * 1e16
        dispatch(addItem(newItemId, formData))
        navigation.navigate('Inventory', { newItemId: newItemId })
      }
    },
    [dispatch, formState.isValid, navigation]
  )

  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const isFormDisabled = formState.submitCount > 0 && !formState.isValid

  const renderError = useCallback(
    (field: keyof AddItemFormData) => {
      if (!errors?.[field]) return null
      return (
        <Text style={styles.inputFieldError}>{errors?.[field]?.message}</Text>
      )
    },
    [errors]
  )

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.closeButton}
          >
            <Ionicons
              name="md-close"
              size={24}
              color={colors.black}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>New Object</Text>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.saveButton}
            disabled={isFormDisabled}
          >
            <Text
              style={[
                styles.saveText,
                !isFormDisabled && styles.saveTextActive,
              ]}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <ImagePickerButton
                mode={ImagePickerModes.CAMERA}
                image={value}
                style={styles.imagePickerTop}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="picture"
            rules={{ required: 'Required field' }}
            defaultValue=""
          />
          {renderError('picture')}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputField
                value={value}
                label="Name"
                style={styles.inputField}
                onChange={onChange}
                textInputProps={{
                  onBlur: onBlur,
                }}
              />
            )}
            name="name"
            rules={{ required: 'Required field' }}
            defaultValue=""
          />
          {renderError('name')}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputField
                value={value}
                mode={InputModes.SELECT}
                label="Category"
                values={['Art', 'Electronic', 'Jewelry', 'Music instrument']}
                style={styles.inputField}
                onChange={onChange}
                textInputProps={{
                  onBlur: onBlur,
                }}
              />
            )}
            name="category"
            rules={{ required: 'Required field' }}
            defaultValue=""
          />
          {renderError('category')}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputField
                value={value}
                mode={InputModes.DATE}
                label="Purchase Date"
                style={styles.inputField}
                onChange={onChange}
                textInputProps={{
                  onBlur: onBlur,
                }}
              />
            )}
            name="purchaseDate"
            rules={{ required: 'Required field' }}
            defaultValue=""
          />
          {renderError('purchaseDate')}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputField
                value={value}
                label="Purchase Value"
                style={styles.inputField}
                onChange={onChange}
                textInputProps={{
                  onBlur: onBlur,
                }}
                textInputMaskProps={{
                  type: 'money',
                  options: {
                    precision: 2,
                    separator: '.',
                    delimiter: ' ',
                    unit: '',
                    suffixUnit: '€',
                  },
                }}
              />
            )}
            name="purchasePrice"
            rules={{ required: 'Required field' }}
            defaultValue=""
          />
          {renderError('purchasePrice')}
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputField
                value={value}
                mode={InputModes.TEXT}
                label="Description (optional)"
                style={styles.inputField}
                onChange={onChange}
                textInputProps={{
                  onBlur: onBlur,
                  multiline: true,
                  numberOfLines: 3,
                }}
              />
            )}
            name="description"
            rules={{ required: false }}
            defaultValue=""
          />
          {renderError('description')}
          <Text style={styles.label}>Documents</Text>
          <View style={styles.documentsRow}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <ImagePickerButton
                  mode={ImagePickerModes.DOCUMENT}
                  image={value}
                  style={styles.imagePicker}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              name="bill"
              rules={{ required: 'Required field' }}
              defaultValue=""
            />
          </View>
          {renderError('bill')}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
