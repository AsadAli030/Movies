import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import MovieScreen from './MovieScreen'
import Person from './Person'
import Movies from '../components/Movies'
import SearchScreen from './SearchScreen'





const NavigationApp = () => {
    const Stack=createNativeStackNavigator();

    return (
    <View style={{flex:1}}>
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown:false}} >
             <Stack.Screen  component={Home} name='Home' />  
             <Stack.Screen  component={MovieScreen} name='MovieScreen' />  
              <Stack.Screen component={Person} name='Person'/>
              <Stack.Screen component={Movies} name='Movies'/>
              <Stack.Screen component={SearchScreen} name='SearchScreen'/>

              </Stack.Navigator>
        </NavigationContainer>
    </View>
  )
}

export default NavigationApp

const styles = StyleSheet.create({})