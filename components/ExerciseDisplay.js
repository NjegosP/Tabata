import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import CardTextField from './CardTextField';

const ExerciseDisplay = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...styles.exerciseDisplay, ...props.styles}}
      onPress={props.startSessionHandler}>
      <CardTextField
        exerciseName={props.exerciseName}
        exerciseDuration={props.exerciseDuration}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  exerciseDisplay: {
    flexDirection: 'column',
    width: 300,
    height: 400,
    backgroundColor: colors.SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default ExerciseDisplay;
