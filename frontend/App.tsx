/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TextInput,
} from 'react-native';

axios.defaults.baseURL = 'http://localhost:3000';

const App = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <SafeAreaView>
        <Text>Hello world!</Text>
        <TextInput
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="username"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="password"
        />
        <Button
          onPress={() => {
            axios
              .post('/login', {
                data: {
                  username,
                  password,
                },
              })
              .then(res => {
                console.log(res);
                Alert.alert(${res.data.success});
              });
          }}
          title="LOGIN"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
