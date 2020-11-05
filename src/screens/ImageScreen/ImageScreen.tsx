import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as React from 'react'
import { useCallback } from 'react'
import { TouchableOpacity, View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { SafeAreaView } from 'react-native-safe-area-context'

import colors from '../../global/colors'
import hitSlops from '../../global/constants'
import { ImageScreenNavigationProp, ImageScreenRouteProp } from './constants'
import styles from './styles'

export default function ImageScreen() {
  const navigation = useNavigation<ImageScreenNavigationProp>()
  const route = useRoute<ImageScreenRouteProp>()

  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])
  const { image } = route?.params

  if (!image) {
    return null
  }

  return (
    <View style={styles.container}>
      <ImageViewer
        useNativeDriver
        renderIndicator={() => <View />}
        imageUrls={[
          typeof image === 'number'
            ? { url: '', props: { source: image } }
            : { url: image?.uri },
        ]}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleBackPress}
          hitSlop={hitSlops.standard}
        >
          <MaterialCommunityIcons
            name="close-circle"
            size={30}
            color={colors.white}
            style={styles.closeButtonIcon}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
