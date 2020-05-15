import React from 'react';
import {Card, CardItem, Body, Text, Button} from 'native-base';

const ItemCard = (item) => {
  const {name, id, qty} = item;
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
