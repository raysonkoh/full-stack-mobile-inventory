import React, {useState, useEffect, useContext} from 'react';
import {useFocusEffect} from '@react-navigation/native';
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

  useFocusEffect(
    React.useCallback(() => {
      console.log('call');
      customAxios
        .get(`/inventory/${user.token}`)
        .then((res) => {
          console.log(res.data);
          setItems(res.data.inventory);
        })
        .catch((err) => {
          Alert.alert('An error has occured!');
        });
    }, []),
  );

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
          onPress={() => navigation.navigate('Add New Item')}>
          <Text>Add New Item</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Inventorypage;
