import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Content,
  Text,
  Button,
  Toast,
} from 'native-base';
import customAxios from '../helpers/customAxios';

const Registerpage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Content padder>
        <Form>
          <Item>
            <Input
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
            />
          </Item>
          <Item>
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />
          </Item>
        </Form>
        <Button
          style={{margin: 10}}
          onPress={() => {
            customAxios
              .post('/auth/register', {
                username,
                password,
              })
              .then((res) => {
                if (res.err) {
                } else {
                  Toast.show({
                    text: 'Registration success! Redirecting to login...',
                    textStyle: {color: 'green'},
                    buttonText: 'Okay!',
                  }) > navigation.navigate('Login');
                }
              });
          }}>
          <Text>Register</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Registerpage;
