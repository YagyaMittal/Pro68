import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import facebook from './screens/facebook';
import insta from './screens/insta';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center'
  }
});

const TabNavigator = createBottomTabNavigator({
   facebook: {screen: facebook},
   insta: {screen: insta}
});

const AppContainer = createAppContainer(TabNavigator);