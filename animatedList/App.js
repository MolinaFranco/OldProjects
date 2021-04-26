import React from 'react';
import List from "./components/List";
import Header, { HEADER_HEIGHT } from "./components/Header";


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  
  const tasks = [
    "Swipe to the right to complete!",
    "Swipe to the left to delete",
    "Tap and hold to pick me up",
    "Pull down to create an item",
    "Try shaking to undo",
    "Try pincing vertically shut",
    "Pull up to clear",
  ];

 return(
  <View style={styles.container}>
    <Header />
    <List tasks={tasks}/> 
  </View>
      
 )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default App;
