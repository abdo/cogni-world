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

const CanteenItemsList = ({ canteenItems, isAdmin }) => (
  <List>
    {canteenItems.map(({ _id: id, avatar, name, price, numberOfPurchases }) => (
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
          <Button transparent>
            <Text>Get</Text>
          </Button>
        </Right>
      </ListItem>
    ))}
  </List>
);

export default CanteenItemsList;
