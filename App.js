import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableNativeFeedback
  ,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  handlePress = () => {
    alert('hello')
  }
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    )
  }
}