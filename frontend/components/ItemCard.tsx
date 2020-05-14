import React from 'react';
import {Card, CardItem, Body, Text, Button, Container} from 'native-base';

const ItemCard = ({id, name, qty}) => {
  return (
    <Card>
      <CardItem header>
        <Text>{name}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>id: {id}</Text>
          <Text>qty: {qty}</Text>
        </Body>
        <Button>
          <Text>button</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export default ItemCard;
