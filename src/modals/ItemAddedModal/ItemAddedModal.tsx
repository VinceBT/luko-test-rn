import LottieView from 'lottie-react-native'
import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { MarkdownView } from 'react-native-markdown-view'
import { SafeAreaView } from 'react-native-safe-area-context'

import { InsuredItem } from '../../mock/data/insured-items'
import { checkmarkLottie } from './constants'
import { markdownStyles, styles } from './styles'

type Props = {
  insuredItem: InsuredItem
  visible?: boolean
  onHide?: Function
}

export default function ItemAddedModal(props: Props) {
  const { visible = false, onHide, insuredItem } = props

  const $animation = useRef<LottieView>(null)
  const [showBody, setShowBody] = useState(false)

  const handleConfirm = useCallback(() => {
    onHide?.()
  }, [onHide])

  const animationDuration = 400

  useEffect(() => {
    if (visible) {
      setShowBody(true)
      Vibration.vibrate()
      setTimeout(() => {
        $animation.current?.play(0, 42)
      }, Math.max(0, animationDuration - 100))
    } else setShowBody(false)
  }, [visible])

  const screenHeight = Dimensions.get('window').height

  if (!insuredItem) return null

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        handleConfirm()
      }}
    >
      <SafeAreaView style={styles.modalBackdrop}>
        <Animatable.View
          useNativeDriver
          transition={['translateY']}
          duration={animationDuration}
          style={[
            styles.modalBody,
            showBody ? {} : { transform: [{ translateY: screenHeight }] },
          ]}
        >
          <View style={styles.modalLottieContainer}>
            <LottieView
              autoPlay={false}
              loop={false}
              ref={$animation}
              style={styles.modalLottie}
              source={checkmarkLottie}
            />
          </View>
          <Text style={styles.modalTitle}>Object successfully added</Text>
          <MarkdownView
            styles={{
              text: markdownStyles.text,
              strong: markdownStyles.strong,
            }}
            style={styles.modalText}
          >
            The estimated value of your {insuredItem.name} is **
            {insuredItem.price}**.
            {'\n'}
            If something ever happened to it, it'll be covered and refunded
          </MarkdownView>
          <TouchableOpacity
            style={styles.modalConfirmButton}
            onPress={handleConfirm}
          >
            <Text style={styles.modalConfirmButtonText}>Great !</Text>
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </Modal>
  )
}
