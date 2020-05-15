import React, {useState, useEffect, useContext} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Container, Content, Text, Button} from 'native-base';
import ItemCard from '../components/ItemCard';
import customAxios from '../helpers/customAxios';
import {UserContext} from '../contexts/UserContext';
import {Alert} from 'react-native';

const Inventorypage = ({navigation}) => {
  const [items, setItems] = useState([]);
  const {user, userLogin} = useContext(UserContext);

  const refresh = () =>
    customAxios
      .get(`/inventory/${user.token}`)
      .then((res) => {
        setItems(res.data.inventory);
      })
      .catch((err) => {
        Alert.alert('An error has occured!');
      });

  useFocusEffect(
    React.useCallback(() => {
      refresh();
    }, []),
  );

  return user.token === null ? (
    navigation.navigate('Login')
  ) : (
    <Container>
      <Content padder>
        <Text>Welcome {user.username}!</Text>
        {items.map((item) => (
          <ItemCard refresh={refresh} item={item} />
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
