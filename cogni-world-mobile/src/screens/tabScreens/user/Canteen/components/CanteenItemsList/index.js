import React from 'react';
import {
  List,
  ListItem,
  Button,
  Text,
  Left,
  Right,
  Body,
  Thumbnail,
} from 'native-base';
import MainModal from '../../../../../../common/components/UI/MainModal';

const CanteenItemsList = ({ items, isAdmin, purchaseCanteenItem }) => (
  <List>
    {items.map(({ _id: id, avatar, name, price, numberOfPurchases }) => (
      <ListItem thumbnail key={id}>
        <Left>
          <Thumbnail
            square
            source={{
                uri: avatar,
              }}
          />
        </Left>
        <Body>
          <Text>{name}</Text>
          <Text note numberOfLines={1}>
            {price}
            {' '}
              EGP
          </Text>
          {
              isAdmin && (
              <Text note numberOfLines={1}>
              Bought
                {` ${numberOfPurchases} `}
              times
              </Text>
              )
            }
        </Body>
        <Right>
          <Button transparent onPress={() => MainModal({ header: 'Are you sure?', text: 'You will get this canteen item', onConfirm: () => purchaseCanteenItem({ _id: id, price }) })}>
            <Text>Get</Text>
          </Button>
        </Right>
      </ListItem>
      ))}
  </List>
);

export default CanteenItemsList;
