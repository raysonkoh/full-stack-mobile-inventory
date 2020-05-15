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

const Inventorypage = ({navigation}) => {
  const [items, setItems] = useState([]);
  const {user, userLogin} = useContext(UserContext);
  console.log(user);
  /*
  useEffect(() => {
    customAxios.get('/inventory').then((res) => {
      setItems(res.data);
    });
  }, []);
  */

  return (
    <Container>
      <Content padder>
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
