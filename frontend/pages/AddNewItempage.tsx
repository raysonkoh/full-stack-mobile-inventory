import React from 'react';
import {Content, Container, Text, Form, Input, Item, Button} from 'native-base';

const AddNewItempage = () => {
  return (
    <Container>
      <Content padder>
        <Form>
          <Item>
            <Input placeholder="Item Name" />
          </Item>
          <Item>
            <Input keyboardType="numeric" placeholder="Num Qty" />
          </Item>
          <Button style={{margin: 10}}>
            <Text>Add New Item</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddNewItempage;
