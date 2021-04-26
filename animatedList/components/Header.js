import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "7%",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default Header;