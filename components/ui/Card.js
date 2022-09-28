import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 25,
    padding: 20,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 8, // shadow for android. IOS have different properties (Shadow).
  },
});

export default Card;