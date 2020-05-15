import React, {useContext} from 'react';
import {Card, CardItem, Body, Text, Button} from 'native-base';
import {UserContext} from '../contexts/UserContext';
import customAxios from '../helpers/customAxios';
import {Alert} from 'react-native';

const ItemCard = ({item, refresh}) => {
  const {id, itemName, itemQty} = item;
  const {user} = useContext(UserContext);

  return (
    <Card>
      <CardItem header>
        <Text>{itemName}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>id: {id}</Text>
          <Text>qty: {itemQty}</Text>
        </Body>
        <Button
          onPress={() => {
            customAxios
              .post('/inventory/delete', {
                token: user.token,
                itemId: id,
              })
              .then((res) => {
                if (res.err) {
                  console.log(err);
                  Alert.alert('An error occurred!');
                } else {
                  refresh();
                }
              })
              .catch((err) => {
                console.log(err);
                Alert.alert('An error occurred!');
              });
          }}
          danger>
          <Text>Delete</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

export default ItemCard;
