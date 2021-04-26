import interpolate from "color-interpolate";
import * as React from "react";
import { View, StyleSheet } from "react-native";

import Header, { HEADER_HEIGHT } from "./Header";
import Task, { TASK_HEIGHT } from "./Task";
import { runSpring, interpolateColors } from "./AnimatedHelpers";

interface ListProps {
  tasks: string[];
}

const colors = ["#C52B27", "#E1B044"];
const palette = interpolate(colors);

export default class List extends React.PureComponent<ListProps> {
  render() {
    const { tasks } = this.props;
    const step = 1 / tasks.length;
    return (
      <View style={styles.container}>
        <Header />
        <View>
          {
            tasks.map((task, key) => {
              const bgColor = palette(step * key);
              return (
                <View {...{ key }}>
                  <Task
                    backgroundColor={bgColor}
                    {...{ task }}
                  />
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
