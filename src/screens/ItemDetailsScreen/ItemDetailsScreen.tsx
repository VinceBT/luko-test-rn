import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import moment from 'moment'
import * as React from 'react'
import { useCallback, useContext } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import colors from '../../global/colors'
import hitSlops, { ISODateFormat } from '../../global/constants'
import { store } from '../../store'
import {
  InventoryScreenNavigationProp,
  InventoryScreenRouteProp,
} from './constants'
import { styles } from './styles'

export default function ItemDetailScreen() {
  const navigation = useNavigation<InventoryScreenNavigationProp>()
  const route = useRoute<InventoryScreenRouteProp>()

  const {
    state: { insuredItems },
  } = useContext(store)

  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handleImagePress = useCallback(
    (image) => () => {
      navigation.push('Image', { image: image })
    },
    [navigation]
  )

  const renderRow = useCallback((leftText: string, rightText: string) => {
    if (!leftText || !rightText) return null
    return (
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>{leftText}</Text>
        <Text style={styles.infoValue}>{rightText}</Text>
      </View>
    )
  }, [])

  if (!route?.params?.itemId) {
    return null
  }
  const insuredItem = insuredItems.find(
    (insuredItem) => insuredItem.id === route?.params?.itemId
  )
  if (!insuredItem) {
    return null
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        <TouchableOpacity onPress={handleImagePress(insuredItem.image)}>
          <Image style={styles.bigImage} source={insuredItem.image} />
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.category}>{insuredItem.category}</Text>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{insuredItem.name}</Text>
            <TouchableOpacity
              style={styles.editButton}
              hitSlop={hitSlops.standard}
              onPress={() => alert('Not implemented')}
            >
              <MaterialCommunityIcons
                name="square-edit-outline"
                size={24}
                color={colors.blue}
                style={styles.editButtonIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.section}>Information</Text>
          {renderRow('Category', insuredItem.category)}
          {Boolean(insuredItem.purchaseDate) &&
            renderRow(
              'Purchased Date',
              moment(insuredItem.purchaseDate).format(ISODateFormat)
            )}
          {Boolean(insuredItem.endOfWarrantyDate) &&
            renderRow(
              'End of Warranty',
              moment(insuredItem.endOfWarrantyDate).format(ISODateFormat)
            )}
          <View style={styles.separator} />
          <Text style={styles.section}>Price</Text>
          {renderRow('Estimation', insuredItem.purchasePrice)}
          {renderRow('Purchase Price', insuredItem.price)}
          <View style={styles.separator} />
          <Text style={styles.section}>Documents</Text>
          <TouchableOpacity onPress={handleImagePress(insuredItem.bill)}>
            <Image style={styles.document} source={insuredItem.bill} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleBackPress}
          hitSlop={hitSlops.standard}
        >
          <MaterialCommunityIcons
            name="close-circle"
            size={30}
            color={colors.black}
            style={styles.closeButtonIcon}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
