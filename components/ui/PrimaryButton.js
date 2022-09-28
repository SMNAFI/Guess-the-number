import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

// children is the inner componets. ????? need to check
function PrimaryButton ({children, onPress}) {

    return (
      <View style={styles.button}>
        {/* we can also pass arry of styles inside style object. */}
        <Pressable
          style={styles.buttonInner}
          onPress={onPress}
          android_ripple={{ color: Colors.primary600 }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 24,
    margin: 4,
    overflow: "hidden",
    elevation: 2,
  },
  buttonInner: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;