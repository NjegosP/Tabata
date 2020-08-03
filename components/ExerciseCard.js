import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import CardTextField from './CardTextField';

const ExerciseCard = props => {
  return (
    <View style={styles.mainPositioning} id={props.id}>
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
      <TouchableOpacity
        onPress={props.deleteCardHandler}
        activeOpacity={0.9}
        style={styles.removeButton}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainPositioning: {
    display: 'flex',
    width: '100%',
  },
  removeButton: {
    alignSelf: 'flex-end',
    top: -115,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'white',
  },
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
