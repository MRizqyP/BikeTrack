import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Dash from 'react-native-dash'
export default function LineDashed({ flexDirectionvalue, heightvalue, color }) {
  const [rColor, setColor] = useState('#AAAAAA')
  //   const check = color ? setColor(color) : null;
  //   console.log(check);

  return (
    <Dash
      style={{
        // width: 1,
        height: heightvalue,
        marginTop: 10,
        flexDirection: flexDirectionvalue
      }}
      dashGap={3}
      dashLength={6}
      dashColor={color ? color : '#D9D9D9'}
    />
  )
}
