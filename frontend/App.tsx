/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

axios.defaults.baseURL = 'http://localhost:3000';
const App = () => {
  return (
    <>
      <SafeAreaView>
        <Text>Hello world!</Text>
        <Button
          onPress={() => {
            axios.get('/').then(res => Alert.alert(res.data.msg));
          }}
          title="GET LOCALHOST:3000"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
