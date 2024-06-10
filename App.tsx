import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TODO = () => {

  const Data = [
    {
      "id": "1",
      "Todo": "My Data",
    },
    {
      "id": "2",
      "Todo": "My Data",
    },
    {
      "id": "3",
      "Todo": "My Data",
    },
    {
      "id": "4",
      "Todo": "My Data",
    },
    {
      "id": "1",
      "Todo": "My Data",
    },
    {
      "id": "2",
      "Todo": "My Data",
    },
    {
      "id": "3",
      "Todo": "My Data",
    },
    {
      "id": "4",
      "Todo": "My Data",
    },
    {
      "id": "1",
      "Todo": "My Data",
    },
    {
      "id": "2",
      "Todo": "My Data",
    },
    {
      "id": "3",
      "Todo": "My Data",
    },
    {
      "id": "4",
      "Todo": "My Data",
    },
  ];

  const Item = ({ Todo }) => (
    <View style={styles.item}>
      <Text style={styles.data}>{Todo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.title}>Today's Task</Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item Todo={item.Todo} />}
          keyExtractor={item => item.id}
          style={styles.flatlist}
        />

      </View>
      <View style={styles.Todoicon}>
        <Icon
          name='pluscircleo'
          size={50}
          color='#000000'
          style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'column',
    // backgroundColor:'red'
  },
  Todoicon: {
    // zIndex: 1,
    // backgroundColor:'gray',
    position: 'absolute',
    bottom: 30,
    right: 10,

  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 20,

  }, item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  data: {
    fontSize: 20,
  },
  title: {
    marginTop: 16,
    fontSize: 26,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  flatlist: {
    marginTop: 20,
  }
});

export default TODO;