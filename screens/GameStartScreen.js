import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameStartScreen = ({ onPickNumber }) => {
  const [enterdNumber, setEnteredNumber] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const inputValidation = () => {
    const inputNumber = parseInt(enterdNumber);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert(
        "Invalid input!",
        "Input must be a number and between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetHandler }]
      );

      return;
    }
    onPickNumber(inputNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        {/* <Text style={styles.instructionText}>Enter a number</Text> */}
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          value={enterdNumber}
          onChangeText={inputHandler}
          maxLength={2}
          keyboardType="number-pad"
          // for specific purpose
          // autoCapitalize="false"
          // autoCorrect='false'
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={inputValidation}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    width: 80,
    height: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    marginVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameStartScreen;