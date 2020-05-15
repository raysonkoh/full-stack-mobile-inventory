import React, {useState, useContext} from 'react';
import {Container, Button, Form, Item, Input, Content, Text} from 'native-base';
import {Alert} from 'react-native';
import customAxios from '../helpers/customAxios';
import {UserContext} from '../contexts/UserContext';

const Loginpage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user, userLogin} = useContext(UserContext);

  return (
    <Container>
      <Form>
        <Item>
          <Input
            value={username}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
        </Item>
        <Item>
          <Input
            value={password}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />
        </Item>
      </Form>
      <Content padder>
        <Button
          block
          style={{margin: 5}}
          onPress={() => {
            customAxios
              .post('/auth/login', {
                username,
                password,
              })
              .then((res) => {
                if (res.data.err) {
                  Alert.alert(res.data.err);
                } else {
                  userLogin(username, 1); // dummy token value of 1
                  navigation.push('Inventory');
                }
              });
          }}>
          <Text>Sign In</Text>
        </Button>
        <Button
          block
          style={{margin: 5}}
          onPress={() => navigation.push('Register')}>
          <Text>Register</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Loginpage;
