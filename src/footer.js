import React from 'react';
import {
    Text,
    View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>{props.headerText}Copyright @dayuyogi</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#03A9F4',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      position: 'relative',
      marginTop: 10,
    },
     textStyle: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
    },
};
export default Footer;
