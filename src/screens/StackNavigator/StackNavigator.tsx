import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import AddItemScreen from '../AddItemScreen/AddItemScreen'
import ImageScreen from '../ImageScreen/ImageScreen'
import ItemDetailsScreen from '../ItemDetailsScreen/ItemDetailsScreen'
import TabNavigator from '../TabNavigator/TabNavigator'
import { StackParamList } from './constants'

const Stack = createStackNavigator<StackParamList>()

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  )
}
