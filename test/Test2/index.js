import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Swipeable from 'react-native-swipeable';


const Test2 = () => {

 
  const abc ='xyz';

  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>{abc}</Text>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default Test2;