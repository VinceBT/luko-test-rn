import { useActionSheet } from '@expo/react-native-action-sheet'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as React from 'react'
import { useCallback, useState } from 'react'
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native'

import colors from '../../global/colors'
import { ImagePickerModes } from './constants'
import { styles } from './styles'

type Props = {
  image?: string
  onChange?: Function
  onBlur?: Function
  mode?: ImagePickerModes
} & ViewProps

function ImagePickerButton(props: Props) {
  const {
    image,
    mode = ImagePickerModes.CAMERA,
    style,
    onChange,
    onBlur,
    ...otherProps
  } = props

  const { showActionSheetWithOptions } = useActionSheet()

  const [currentImage, setCurrentImage] = useState(image)

  const openCameraRoll = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
      if (status !== 'granted') {
        return alert(
          'Sorry, we need camera roll permissions to make this work!'
        )
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    })

    onBlur?.()

    if (!result.cancelled) {
      setCurrentImage(result.uri)
      onChange?.(result.uri)
    }
  }, [onBlur, onChange])

  const openPictureView = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync()
      if (status !== 'granted') {
        return alert('Sorry, we need camera permissions to make this work!')
      }
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    })

    onBlur?.()

    if (!result.cancelled) {
      setCurrentImage(result.uri)
      onChange?.(result.uri)
    }
  }, [onBlur, onChange])

  const handlePress = useCallback(() => {
    const options = ['Camera Roll', 'Take a picture', 'Cancel']
    const cancelButtonIndex = 2

    showActionSheetWithOptions(
      { options, cancelButtonIndex },
      (buttonIndex: number) => {
        switch (buttonIndex) {
          case 0:
            openCameraRoll()
            break
          case 1:
            openPictureView()
            break
        }
      }
    )
  }, [openCameraRoll, openPictureView, showActionSheetWithOptions])

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.touchable, style]}
      {...otherProps}
    >
      {currentImage ? (
        <Image source={{ uri: currentImage }} style={styles.image} />
      ) : (
        <View style={styles.empty}>
          {mode === ImagePickerModes.CAMERA ? (
            <Entypo name="camera" size={32} color={colors.blue} />
          ) : (
            <MaterialCommunityIcons
              name="receipt"
              size={24}
              color={colors.blue}
            />
          )}
          <Text style={styles.emptyText}>
            {mode === ImagePickerModes.CAMERA ? 'Add Photo' : 'Add Receipt'}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default React.memo<Props>(ImagePickerButton)
