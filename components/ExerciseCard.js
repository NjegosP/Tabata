import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import CardTextField from './CardTextField';

const ExerciseCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.exerciseCard}
      onPress={props.startSessionHandler}>
      <CardTextField
        style={styles.textField}
        exerciseName={props.exerciseName}
        exerciseDuration={props.exerciseDuration}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  exerciseCard: {
    flexDirection: 'column',
    width: 300,
    height: 100,
    backgroundColor: colors.SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textField: {
    fontSize: 16,
  },
});
export default ExerciseCard;
