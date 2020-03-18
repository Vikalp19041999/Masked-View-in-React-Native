import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

export default class App extends React.Component {
  render() {
    return (
      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Masked View
            </Text>
          </View>
        }
      >

        <View style={{ flex: 1, height: '100%', backgroundColor: '#2c3e50' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#95a5a6' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
      </MaskedView>
    );
  }
}