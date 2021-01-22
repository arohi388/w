import React from 'react'
import{View,Text}from 'react-native'
import Booktransaction from "./screens/booktransaction"
import Searchscreen from "./screens/searchscreen"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
export default class App extends React.Component{
    render(){
        return(

            <AppContainer></AppContainer>
        )
    }
}
const tabnavigation=createBottomTabNavigator({
  transaction:{screen:Booktransaction},
  search:{screen:Searchscreen}
})
const AppContainer=createAppContainer(tabnavigation)