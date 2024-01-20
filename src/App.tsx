import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  Button,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import birds1 from '../assets/images/birds1.png';
import birds2 from '../assets/images/birds2.png';
import design1 from '../assets/images/design1.png';
import design2 from '../assets/images/design2.png';
import parrot1 from '../assets/images/parrot1.png';
import parrot2 from '../assets/images/parrot2.png';
import parrot3 from '../assets/images/parrot3.png';
import krishna2 from '../assets/images/krishna2.jpg';
import house2 from '../assets/images/house2.png';
import parrot4 from '../assets/images/parrot4.png';


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enablevibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};
let num = 1;
function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(krishna2);

  const rollDiceOnTop = () => {
    switch (num) {
      case 1:
        setDiceImage(birds2);
        break;
      case 2:
        setDiceImage(design1);
        break;
      case 3:
        setDiceImage(design2);
        break;
      case 4:
        setDiceImage(parrot1);
        break;
      case 5:
        setDiceImage(parrot2);
        break;
      case 6:
        setDiceImage(parrot3);
        break;
      case 7:
        setDiceImage(krishna2);
        break;
      case 8:
        setDiceImage(house2);
        break;
      case 9:
        setDiceImage(birds1);
        break;
      case 10:
        setDiceImage(parrot4);
        break;
      default:
        setDiceImage(krishna2);
        break;
    }
  };
  const decrease = () => {
    // console.log(num);
    if (num == 0) {
      num = 10;
    } else if (num >= 1 && num <= 11) {
      num -= 1;
      rollDiceOnTop();
    }
  };
  const increase = () => {
    // console.log(num);
    if (num == 11) {
      num = 0;
    }
    if (num >= 0 && num <= 10) {
      num += 1;
      rollDiceOnTop();
    }
  };
  const slide = () => {
    // console.log(num);
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    num = randomNumber;
    rollDiceOnTop();
  };
  ReactNativeHapticFeedback.trigger('impactHeavy', options);

  return (
    <View style={styles.container}>
      <View style={{flex: 4}}>
        <Dice imageUrl={diceImage} />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', flex: 2}}>
        <View style={{flex: 1}}>
          <View style={styles.rollDiceBtnText}>
            <Button onPress={decrease} title="Go previous"></Button>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.rollDiceBtnText}>
            <Button onPress={slide} title="Random Image"></Button>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.rollDiceBtnText}>
            <Button onPress={increase} title="Go next"></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF2F2',
    overflow: 'hidden',
    marginTop: 60,
  },
  rollDiceBtnText: {
    fontSize: 24,
    color: 'blue',
    borderColor: 'red',
    borderWidth: 5,
    padding: 10,
    backgroundColor: 'gold',
  },
  diceImage: {
    resizeMode: 'cover',
    width: 430,
    height: 500,
    borderRadius: 150 / 2,
    borderWidth: 5,
    borderColor: 'orange',
  },
});

export default App;
