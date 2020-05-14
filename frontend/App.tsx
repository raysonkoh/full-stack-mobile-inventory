/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Root} from 'native-base';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Inventorypage from './pages/Inventorypage';
import AddNewItempage from './pages/AddNewItempage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Loginpage} />
          <Stack.Screen name="Register" component={Registerpage} />
          <Stack.Screen name="Inventory" component={Inventorypage} />
          <Stack.Screen name="Add New Item" component={AddNewItempage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
