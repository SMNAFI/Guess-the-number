import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

// we can receive style as a prop also
const InstructionText = ({ children, style }) => {
    // for multiple style, array is used. next style will override previous style
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;