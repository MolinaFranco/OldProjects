import * as React from "react";
import { View, Text, StyleSheet } from "react-native";


export const TASK_HEIGHT = 64;


const Task = (props) => {
    return (
      <View style= {styles.container} backgroundColor = {props.backgroundColor} >
        <Text style={styles.text}>{props.task}</Text>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    height: TASK_HEIGHT,
    justifyContent: "center",
    padding: 8,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});

export default Task;