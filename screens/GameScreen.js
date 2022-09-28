import { Alert, FlatList, StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from 'react';
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";


// [min, max), max is not included in the range
  const generateRandomBetween = (min, max, exclude) => {
    // math random generate number between 0-1, 1 excluded
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      // console.log(rndNum);
      return rndNum;
    }
  };

  let minBoundary = 1;
  let maxBoundary = 100;


const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(listLength);
    }
    // useEffect will be triggred if any of the dependency will change
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 0;
    maxBoundary = 100;
    // [] means when this component is rerendered or first rendering then use Effect will be triggerd.
  }, [])

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "This is wrong...", [
        { text: "Sorry!", style: "cancle" },
      ]);

      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    // when update depends on previous then this is the best way to do it.
    setGuesses((prevGuesses) => [newRndNum, ...prevGuesses]);
  };

  const listLength = guesses.length;

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        {/* passing  instructionText style as a prop*/}
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>
        {guesses.map(guess => <Text key={guess}>{guess}</Text>)}
      </View> */}
      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={(itemData) => (
            <GuessLogItem guess={itemData.item} roundNumber={listLength - itemData.index} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;