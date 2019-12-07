import { Text, Card, CardItem, Body } from 'native-base';
import React from 'react';

const MainRowsCard = ({ rows }) => (
  <Card
    style={{
      width: '90%',
      alignSelf: 'center',
    }}
  >
    {rows.map(row => (
      <CardItem header key={row.key}>
        <Text>{row.key}</Text>
        <CardItem>
          <Body>
            <Text>{row.value}</Text>
          </Body>
        </CardItem>
      </CardItem>
    ))}
  </Card>
);

MainRowsCard.defaultProps = {
  rows: [], // ex: rows = [{key: 'key1', value: 'value1'}, {key: 'key2', value: 'value2'}]
};

export default MainRowsCard;
