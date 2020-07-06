import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.textView}>
        <Text style={styles.text}>TABATA</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={props.enterEditMode}>
          <Text>S</Text>
        </TouchableOpacity>
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
  button: {
    width: 50,
    top: 20,
    borderRadius: 50,
    height: 50,
    backgroundColor: colors.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 52,
    marginTop: '10%',
    fontWeight: 'bold',
    color: colors.PRIMARY_COLOR,
  },
  textView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default Header;
