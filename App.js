import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from './constants/colors.js';
import Header from './components/Header';
import ExerciseCard from './components/ExerciseCard';
import ExerciseDisplay from './components/ExerciseDisplay';
import RNCalendarEvents from 'react-native-calendar-events';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [currentText, setCurrentText] = useState('START');
  const [editMode, setEditMode] = useState(false);

  const addEvent = () => {
    RNCalendarEvents.saveEvent('Title of event', {
      startDate: '2016-08-19T19:26:00.000Z',
      endDate: '2017-08-19T19:26:00.000Z',
    }).then(
      promise => console.log(promise),
      () => console.log('not successful'),
    );
  };
  const editModeHandler = () => {
    addEvent();
    if (editMode) {
      setEditMode(false);
    } else if (!editMode && currentText === 'START') {
      setEditMode(true);
    }
  };
  let arr = [
    {exercise: 'PUSH UPs', duration: 5, id: 1},
    {exercise: 'REST', duration: 3, id: 2},
    {exercise: 'PULL UPs', duration: 5, id: 3},
    {exercise: 'REST', duration: 3, id: 4},
    {exercise: 'PUSH UPs', duration: 5, id: 5},
    {exercise: 'REST', duration: 3, id: 6},
    {exercise: 'PULL UPs', duration: 5, id: 7},
    {exercise: 'REST', duration: 3, id: 8},
  ];
  const deleteCard = () => {};

  const cardRender = () => {
    if (!editMode) {
      return (
        <ExerciseDisplay
          exerciseName={currentText}
          exerciseDuration={currentNumber}
          startSessionHandler={startSession}
        />
      );
    }
    return arr.map(el => {
      return (
        <View style={styles.view}>
          <ExerciseCard
            id={el.id}
            exerciseName={el.exercise}
            exerciseDuration={el.duration}
            deleteCardHandler={deleteCard}
          />
        </View>
      );
    });
  };
  const startSession = () => {
    if (currentText === 'START') {
      let exArray = [
        {exercise: 'STARTING IN', duration: 2},
        {exercise: 'PUSH UPs', duration: 5},
        {exercise: 'REST', duration: 3},
        {exercise: 'PULL UPs', duration: 5},
        {exercise: 'REST', duration: 3},
      ];
      let counter = 0;
      setCurrentText('STARTING IN');
      setCurrentNumber(exArray[counter].duration + 1);
      let intervalID = setInterval(() => {
        if (counter < exArray.length) {
          setCurrentNumber(exArray[counter].duration);
          setCurrentText(exArray[counter].exercise);
          exArray[counter].duration--;
          if (exArray[counter].duration === -1) {
            if (counter === exArray.length - 1) {
              clearInterval(intervalID);
              //return to start state
              setCurrentNumber('');
              setCurrentText('START');
            } else {
              counter += 1;
            }
          }
        }
      }, 1000);
    }
  };

  return (
    <View style={styles.screen}>
      <Header enterEditMode={editModeHandler} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {cardRender()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.PRIMARY_COLOR,
    alignItems: 'center',
  },
});

export default App;
