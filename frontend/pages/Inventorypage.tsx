import React from 'react';
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

const Inventorypage = ({navigation}) => {
  return (
    <Container>
      <Content>
        <ItemCard id={1} name={'name'} qty={1} />
        <Button onPress={() => navigation.push('Add New Item')}>
          <Text>Add New Item</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Inventorypage;
