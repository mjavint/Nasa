import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Detail from '../components/Detail'
import { RootStackParams } from '../types'
import Home from '../views/Home'

const Stack = createNativeStackNavigator<RootStackParams>()
const routeScreenOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle: {
    color: '#fff',
  },
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={routeScreenOptions}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={routeScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
