import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Alert, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TODO = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState("");


  console.log(modalVisible);
  console.log("hiii");
  console.log("inputValue==>", inputValue);
  console.log("todo==>", todo);


  const Data = [
    {
      // "id": "1",
      "Todo": "My Data",
    },
    {
      // "id": "2",
      "Todo": "My Data",
    },
    {
      // "id": "3",
      "Todo": "My Data",
    },
    {
      // "id": "4",
      "Todo": "My Data",
    },
    {
      // "id": "1",
      "Todo": "My Data",
    },
    {
      // "id": "2",
      "Todo": "My Data",
    },
    {
      // "id": "3",
      "Todo": "My Data",
    },
    {
      // "id": "4",
      "Todo": "My Data",
    },
    {
      // "id": "1",
      "Todo": "My Data",
    },
    {
      // "id": "2",
      "Todo": "My Data",
    },
    {
      // "id": "3",
      "Todo": "My Data",
    },
    {
      // "id": "4",
      "Todo": "My Data",
    },
  ];

  const handleInputChange = (text) => {
    setInputValue(text);
  }
  const submit = () => {
    setTodo(inputValue);
    setModalVisible(!modalVisible)
    setInputValue('')
  }


  const Item = ({ Todo }) => (
    <View style={styles.item}>
      <Text style={styles.data}>{Todo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.title}>Todo Task</Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item Todo={item.Todo} />}
          // keyExtractor={item => item.id}
          style={styles.flatlist}
        />

      </View>
      <View style={styles.Todoicon}>
        <Icon
          name='plus'
          size={36}
          color='white'
          style={styles.icon}
          onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity style={styles.centeredView} activeOpacity={1} onPress={() => setModalVisible(!modalVisible)}>
          <TouchableOpacity style={styles.modalView} activeOpacity={1} onPress={() => { }}>
            <View style={{ flex: 0.2, marginTop: 10, alignSelf: 'flex-end', right: 20 }}>
              <Icon
                name='closecircleo'
                size={30}
                color='#000000'
                style={styles.icon}
                onPress={() => setModalVisible(!modalVisible)} />

            </View>
            <View style={{ flex: 0.5, width: 280 }}>
              <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 800 }}>My Task:</Text>
              <TextInput
                style={styles.input}
                placeholder="Please Enter your Task"
                keyboardType="default"
                value={inputValue}
                onChangeText={handleInputChange}
              />
            </View>
            <View style={{ flex: 0.3, }}>
              <TouchableOpacity style={styles.button} >
                <Text style={{color:'white',fontSize:18}}>Press Here</Text>
              </TouchableOpacity>
            </View>

          </TouchableOpacity>

        </TouchableOpacity>

      </Modal>
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
    marginBottom: 20,
  },
  Todoicon: {
    // zIndex: 1,
    // backgroundColor:'gray',
    position: 'absolute',
    bottom: 40,
    right: 18,
    height:50,
    width:50,
    display:'flex',
    justifyContent:'center',
    alignSelf:'center',
    // // alignItems:'center',
    // alignContent:'center',
    backgroundColor:'#02a8f4',
    borderRadius:40,

  },
  icon: {
    // alignItems:'center',
    alignSelf:'center'
    // alignSelf: 'flex-end',
    // marginRight: 30,

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
    marginTop: 16,
    marginBottom: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
    // marginTop: 22,
  },
  modalView: {
    height: 300,
    width: 350,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 1,
  },
  input: {
    height: 44,
    marginTop: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#02a8f4',
    padding: 10,
    borderRadius:5,
    color:'white'
  },
});

export default TODO;