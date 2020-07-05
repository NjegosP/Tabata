import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import colors from './constants/colors.js';
import Header from './components/Header';
import MainButton from './components/MainButton';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [currentText, setCurrentText] = useState('START');

  const startSession = () => {
    if (currentText === 'START') {
      let exArray = [
        {exercise: 'STARTING IN', duration: 2},
        {exercise: 'PUSH UPs', duration: 5},
        {exercise: 'REST', duration: 3},
        {exercise: 'PULL UP', duration: 5},
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
      <Header />
      <MainButton
        textValue={currentText}
        numberValue={currentNumber}
        mainButtonPress={startSession}
      />
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
