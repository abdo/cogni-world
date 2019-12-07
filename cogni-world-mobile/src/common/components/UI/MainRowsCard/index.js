import { Text, Card, CardItem, Body } from 'native-base';
import React from 'react';
import { fontTypes } from '../../../../assets/styles/base';

const MainRowsCard = ({ rows, style }) => (
  <Card
    style={{
      width: '90%',
      alignSelf: 'center',
      ...style,
    }}
  >
    {rows.map(row => (
      <CardItem header key={row.key}>
        <Text style={{ fontWeight: 'normal', fontFamily: fontTypes.mainBold }}>
          {row.key}
        </Text>
        <CardItem>
          <Body>
            <Text style={{ fontFamily: fontTypes.main }}>{row.value}</Text>
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
