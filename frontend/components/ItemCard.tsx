import React from 'react';
import {Card, CardItem, Body, Text, Button} from 'native-base';

const ItemCard = (props) => {
  const item = props.item;
  const {itemName, itemQty} = item;

  return (
    <Card>
      <CardItem header>
        <Text>{itemName}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>id: none for now</Text>
          <Text>qty: {itemQty}</Text>
        </Body>
        <Button>
          <Text>button</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export default ItemCard;
