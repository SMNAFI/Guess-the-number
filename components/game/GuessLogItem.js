import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.logItem}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Oponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: Colors.accent500,
    // borderWidth: 3,
    borderRadius: 40,
    // borderColor: Colors.primary800,
    padding: 12,
    marginVertical: 8,
    elevation: 4,
  },
  logText: {
    fontSize: 16,
  },
});

export default GuessLogItem;