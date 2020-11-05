import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from './src/global/colors'
import { loadConfig } from './src/global/fonts'
import StackNavigator from './src/screens/StackNavigator/StackNavigator'
import { StateProvider } from './src/store'

export default function App() {
  const [fontsLoaded] = useFonts(loadConfig)

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ActionSheetProvider>
      <StateProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </View>
      </StateProvider>
    </ActionSheetProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
})
