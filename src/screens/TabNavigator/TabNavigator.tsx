import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import BlankScreen from '../BlankScreen/BlankScreen'
import InventoryScreen from '../InventoryScreen/InventoryScreen'
import { TabParamList } from './constants'

const Tab = createBottomTabNavigator<TabParamList>()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inventory"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'Protection':
              return <Entypo name="home" size={24} color={color} />
            case 'Insurance':
              return <FontAwesome5 name="umbrella" size={24} color={color} />
            case 'Inventory':
              return <Ionicons name="ios-list-box" size={24} color={color} />
            case 'Profile':
              return <FontAwesome name="user" size={24} color={color} />
          }
          return null
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.blueyGrey,
        style: { paddingBottom: 3 },
        labelStyle: { ...fonts.AvenirMedium },
      }}
    >
      <Tab.Screen name="Protection" component={BlankScreen} />
      <Tab.Screen name="Insurance" component={BlankScreen} />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Profile" component={BlankScreen} />
    </Tab.Navigator>
  )
}
