/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          We did it Tanner!
        </Text>
        <Text style={styles.instructions}>
          This is an android app, running on react-native.
        </Text>
        <Text style={styles.instructions}>
          Thanks, Facebook!
        </Text>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif'}}
        />

        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'http://1.bp.blogspot.com/-l1r_ctHKtig/VP-8yjjz38I/AAAAAAAALSE/mIrHOlrZw-U/s1600/Cat.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
