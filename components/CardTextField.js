import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';

const CardTextField = props => {
  const condRender = () => {
    // if no number, just show the text
    if (props.exerciseDuration === '') {
      return (
        <View style={styles.section}>
          <Text style={styles.text}>{props.exerciseName}</Text>
        </View>
      );
    }
    //show both text and number
    return (
      <>
        <View style={styles.section}>
          <Text style={{...styles.text, ...props.style}}>
            {props.exerciseName}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={{...styles.text, ...props.style}}>
            {props.exerciseDuration}
          </Text>
        </View>
      </>
    );
  };
  return <>{condRender()}</>;
};
const styles = StyleSheet.create({
  section: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: colors.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});
export default CardTextField;
