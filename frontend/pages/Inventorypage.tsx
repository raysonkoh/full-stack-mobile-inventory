import React, {useState, useEffect, useContext} from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Button,
} from 'native-base';
import ItemCard from '../components/ItemCard';
import AddNewItempage from './AddNewItempage';
import customAxios from '../helpers/customAxios';
import {UserContext} from '../contexts/UserContext';
import {Alert} from 'react-native';

const Inventorypage = ({navigation}) => {
  const [items, setItems] = useState([]);
  const {user, userLogin} = useContext(UserContext);

  useEffect(() => {
    customAxios
      .get(`/inventory/${user.token}`)
      .then((res) => {
        setItems(res.data.inventory);
      })
      .catch((err) => {
        Alert.alert('An error has occured!');
      });
  }, []);

  return user.token === null ? (
    navigation.navigate('Login')
  ) : (
    <Container>
      <Content padder>
        <Text>Welcome {user.username}!</Text>
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
        <Button
          style={{margin: 5}}
          onPress={() => navigation.push('Add New Item')}>
          <Text>Add New Item</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Inventorypage;
