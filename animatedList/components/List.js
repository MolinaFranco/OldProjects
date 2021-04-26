import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Task, { TASK_HEIGHT } from "./Task";

const colors = "white";

const List = (props) => {

  const colors = ["#C52B27", "#E1B044"];
  const palette = interpolate(colors);
  const bgColor = palette(step * key);
  const step = 1 / tasks.length;

  return(
    <View>
      <FlatList 
        data= {props.tasks} 
        renderItem={({item}) => <Task task={item} backgroundColor={bgColor}></Task>}>
      </FlatList>
    </View>
  );
}
  

export default List;