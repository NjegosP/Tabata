import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

const MainButton = props => {
  const condRender = () => {
    if (props.textValue === '') {
      return (
        <View style={styles.section}>
          <Text style={styles.text}>{props.numberValue}</Text>
        </View>
      );
    } else if (props.numberValue === '') {
      return (
        <View style={styles.section}>
          <Text style={styles.text}>{props.textValue}</Text>
        </View>
      );
    } else {
      return (
        <>
          <View style={styles.section}>
            <Text style={styles.text}>{props.textValue}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>{props.numberValue}</Text>
          </View>
        </>
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={props.mainButtonPress}
      activeOpacity={0.8}
      style={styles.mainButton}>
      {condRender()}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  section: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButton: {
    flexDirection: 'column',
    width: '80%',
    height: '25%',
    backgroundColor: colors.SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: '30%',
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
    color: colors.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});
export default MainButton;
