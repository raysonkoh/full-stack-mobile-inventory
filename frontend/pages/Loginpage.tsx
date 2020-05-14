import React, {useState} from 'react';
import {
  Container,
  Button,
  Header,
  Title,
  Form,
  Item,
  Input,
  Content,
  Text,
} from 'native-base';
import {Alert} from 'react-native';
import customAxios from '../helpers/customAxios';

const Homepage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Form>
        <Item>
          <Input
            value={username}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
          />
        </Item>
        <Item>
          <Input
            value={password}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
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
              .then(res => Alert.alert(res.data.msg));
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

export default Homepage;
