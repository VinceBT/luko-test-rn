import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../StackNavigator/constants'
import { TabParamList } from '../TabNavigator/constants'

export type InventoryScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Inventory'>,
  StackNavigationProp<StackParamList>
>

export type InventoryScreenRouteProp = RouteProp<TabParamList, 'Inventory'>
