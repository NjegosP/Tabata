import React from 'react';
import {View, StyleSheet, Text, ImagePropTypes} from 'react-native';
import colors from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.textView}>
        <Text style={styles.text}>TABATA</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: colors.SECONDARY_COLOR,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 32,
    marginTop: '10%',
    fontWeight: 'bold',
    color: colors.PRIMARY_COLOR,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Header;
