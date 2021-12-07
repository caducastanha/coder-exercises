import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import If from './if';

const MinMax = ({x, y}) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (x > y) {
      setMax(x);
      setMin(y);
    } else if (x < y) {
      setMax(y);
      setMin(x);
    }
  }, [x, y]);

  return (
    <View>
      <If condition={x !== y}>
        <Text>
          O valor {max} é maior que o valor {min}!
        </Text>
      </If>
    </View>
  );
};

export default MinMax;
