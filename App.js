import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableNativeFeedback
  ,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import AddEntry from './components/AddEntry';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

export default class App extends React.Component {
  handlePress = () => {
    alert('hello')
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}