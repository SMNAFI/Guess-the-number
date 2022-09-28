import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundsCount, setRoundsCount] = useState(0);

  // need to check fonts
  // const [fontsLoaded] = useFonts({
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // })

  // if(!fontsLoaded) {
  //   return <AppLoading/>
  // }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundsCount(0);
  }

  const gameOverHandler = (numberOfRound) => {
    setGameOver(true);
    setRoundsCount(numberOfRound);
  };

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler}/>;
  if(userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  }
  if(userNumber && gameOver) {
    screen = (
      <GameOverScreen
        rounds={roundsCount}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      ></GameOverScreen>
    );
  }
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.startScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          // this is for the internal view of imageBackground component
          style={styles.startScreen}
          resizeMode="cover"
          //this is to control innar image
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.startScreen}>
            {/* conditionally screen chnage */}
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  },
});
