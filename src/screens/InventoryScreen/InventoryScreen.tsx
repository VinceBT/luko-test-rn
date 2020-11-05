import { Entypo } from '@expo/vector-icons'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import * as React from 'react'
import { useCallback, useContext, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import InsuredItemCard from '../../components/InsuredItemCard/InsuredItemCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import colors from '../../global/colors'
import hitSlops from '../../global/constants'
import { InsuredItem } from '../../mock/data/insured-items'
import ItemAddedModal from '../../modals/ItemAddedModal/ItemAddedModal'
import { store } from '../../store'
import {
  InventoryScreenNavigationProp,
  InventoryScreenRouteProp,
} from './constants'
import { styles } from './styles'

export default function InventoryScreen() {
  const navigation = useNavigation<InventoryScreenNavigationProp>()
  const route = useRoute<InventoryScreenRouteProp>()

  const [searchValue, setSearchValue] = useState('')

  const {
    state: { insuredItems },
  } = useContext(store)

  const [newInsuredItem, setNewInsuredItem] = useState(insuredItems[0])
  const [modalVisible, setModalVisible] = useState(false)

  useFocusEffect(() => {
    if (route?.params?.newItemId) {
      if (newInsuredItem && newInsuredItem.id === route?.params?.newItemId) {
        return
      }
      const insuredItem = insuredItems.find(
        (insuredItem) => insuredItem.id === route?.params?.newItemId
      )
      if (insuredItem) {
        setNewInsuredItem(insuredItem)
        setModalVisible(true)
      }
    }
  })

  const filteredInsuredItems = insuredItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  const handleShowItemDetails = useCallback(
    (item: InsuredItem) => {
      navigation.navigate('ItemDetails', { itemId: item.id })
    },
    [navigation]
  )

  const handleAddNewItem = useCallback(() => {
    navigation.navigate('AddItem')
  }, [navigation])

  const handleDebugModal = useCallback(() => {
    setModalVisible(true)
  }, [])

  const handleModalHide = useCallback(() => {
    setModalVisible(false)
  }, [])

  const handleKeyExtract = useCallback((item) => {
    return item.id
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topBar}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Inventory</Text>
          <TouchableOpacity
            style={styles.addButton}
            hitSlop={hitSlops.standard}
            onPress={handleAddNewItem}
            onLongPress={handleDebugModal}
          >
            <Entypo name="plus" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        {insuredItems.length > 0 && (
          <SearchBar
            style={styles.searchBar}
            value={searchValue}
            onChange={setSearchValue}
          />
        )}
      </SafeAreaView>
      {filteredInsuredItems.length === 0 ? (
        <View style={styles.noResultContainer}>
          <Text style={styles.noResultText}>No results</Text>
        </View>
      ) : (
        <FlatList
          data={filteredInsuredItems}
          horizontal={false}
          keyExtractor={handleKeyExtract}
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={2}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <InsuredItemCard
              onPress={handleShowItemDetails}
              item={item}
              style={styles.listItem}
            />
          )}
        />
      )}
      <ItemAddedModal
        insuredItem={newInsuredItem}
        visible={modalVisible}
        onHide={handleModalHide}
      />
    </View>
  )
}
