import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../StackNavigator/constants'

export type ImageScreenNavigationProp = StackNavigationProp<StackParamList>

export type ImageScreenRouteProp = RouteProp<StackParamList, 'Image'>
