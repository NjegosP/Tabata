import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/';
import Sound from 'react-native-sound';
import colors from '../constants/colors';

const MainButton = props => {
  const condRender = () => {
    // if no number, just show the text
    if (props.numberValue === '') {
      return (
        <View style={styles.section}>
          <Text style={styles.text}>{props.textValue}</Text>
        </View>
      );
    }
    //show both text and number
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
  };

  // useEffect(() => {
  //   // Play the sound with an onEnd callback
  //   Sound.setCategory('Playback');
  //   var beep = new Sound('tone_beep.mp3', Sound.MAIN_BUNDLE, error => {
  //     if (error) {
  //       console.log('failed to load the sound', error);
  //       return;
  //     }

  //     beep.play(success => {
  //       if (success) {
  //         console.log(success);
  //         console.log('successfully finished playing');
  //       } else {
  //         console.log('--playback failed due to audio decoding errors');
  //       }
  //     });

  //     // loaded successfully
  //     console.log(
  //       'duration in seconds: ' +
  //         beep.getDuration() +
  //         'number of channels: ' +
  //         beep.getNumberOfChannels(),
  //     );
  //   });
  // });

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
