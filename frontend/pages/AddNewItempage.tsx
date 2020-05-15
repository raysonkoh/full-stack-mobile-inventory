import React, {useState, useContext} from 'react';
import {Content, Container, Text, Form, Input, Item, Button} from 'native-base';
import customAxios from '../helpers/customAxios';
import {Alert} from 'react-native';
import {UserContext} from '../contexts/UserContext';

const AddNewItempage = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState(0);
  const {user} = useContext(UserContext);

  return (
    <Container>
      <Content padder>
        <Form>
          <Item>
            <Input
              value={itemName}
              onChangeText={(text) => setItemName(text)}
              placeholder="Item Name"
            />
          </Item>
          <Item>
            <Input
              value={itemQty}
              onChangeText={(text) => setItemQty(text)}
              keyboardType="numeric"
              placeholder="Num Qty"
            />
          </Item>
          <Button
            onPress={() => {
              customAxios
                .post('/inventory/add', {
                  token: user.token,
                  item: {
                    itemName,
                    itemQty,
                  },
                })
                .then((res) => {
                  console.log(res);
                  navigation.goBack();
                })
                .catch((err) => Alert.alert('An error has occured!'));
            }}
            style={{margin: 10}}>
            <Text>Add New Item</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddNewItempage;
