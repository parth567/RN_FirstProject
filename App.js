import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Alert, TouchableOpacity, TextInput, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SwipeableFlatList from 'react-native-swipeable-list';
// import Test2 from './test/Test2'


const TODO = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingData, setEditingData] = useState([]);

  console.log(modalVisible);
  console.log("hiii");
  console.log("inputValue==>", inputValue);
  console.log("todo==>", todo);
  console.log("editingIndex==>", editingIndex);
  console.log("editingData==>", editingData);


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
  const submit = (event) => {
    setTodo([...todo, { mytask: inputValue, },]);
    setModalVisible(!modalVisible)
    setInputValue('')
  }
  console.log("todo===>", todo)

  const Item = ({ item, index }) => {
    console.log("todo===>", index)
    return (
      <View style={styles.item}>
        <Text style={styles.data}>{item.mytask}</Text>
      </View>
    )
  };

  const Deletevalidation = (index) => {
    Alert.alert(
      'Delete',
      "Are you sure you went to Delete this Item ?",
      [
        {
          text: 'Yes',
          onPress: () => deleteitem(index),
          style: 'Yes',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };
  const Editvalidation = (index) => {
    Alert.alert(
      'Edit',
      "Are you sure you went to Edit this Item ?",
      [
        {
          text: 'Yes',
          onPress: () => Edititem(index),
          style: 'Yes',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const Edititem = (index) => {
    console.log("index", index)
    setModalVisible(true)
    setEditingIndex(index);

    let find = todo[index];
    console.log("find", find)
    setInputValue(find.mytask);
    setEditingData(find)
  }

  const editData = () => {
    console.log("inputValue", inputValue);
    const editdata = editingData;
    const editindex = editingIndex;
    console.log("editdata", editdata)
    console.log("editindex", editindex)
    let data = todo.splice(editindex, 1, {
      mytask: inputValue
    });

    setEditingData([]);
    setModalVisible(!modalVisible)
  }

  const deleteitem = (index) => {
    const Delete = [...todo]
    console.log("index", index)
    console.log("todo", todo)
    Delete.splice(index, 1);
    // console.log("deletedata", deletedata)
    setTodo(Delete);
  }

  const QuickActions = (index,) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.buttonn, styles.button1]}>
          <Pressable >
            <Icon
              name='edit'
              size={30}
              color='white'
              style={styles.iconEdit}
              onPress={() => Editvalidation(index)} />
          </Pressable>
        </View>
        <View style={[styles.buttonn, styles.button2]}>
          <Pressable >
            <Icon
              name='delete'
              size={30}
              color='white'
              style={styles.iconDelete}
              onPress={() => Deletevalidation(index)} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.title}>Todo Task</Text>
        <SwipeableFlatList
          data={todo}
          renderItem={({ item, index }) => <Item item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatlist}
          maxSwipeDistance={114}
          renderQuickActions={({ index, item }) => QuickActions(index, item)}
        />

      </View>
      <View style={styles.Todoicon}>
        <Icon
          name='plus'
          size={36}
          color='white'
          style={styles.icon}
          onPress={() => { setModalVisible(true); setInputValue(''); setEditingData('') }} />
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
                // value={editingData == '' ? inputValue : editingData.mytask}
                // value={editingData.mytask}
                onChangeText={handleInputChange}
              />
            </View>
            <View style={{ flex: 0.3, }}>
              {editingData == '' ?
                <TouchableOpacity style={styles.button} onPress={submit}>
                  <Text style={{ color: 'white', fontSize: 18, padding: 5 }}>Submit</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.button} onPress={editData}>
                  <Text style={{ color: 'white', fontSize: 18, padding: 5 }}>Edit</Text>
                </TouchableOpacity>
              }
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
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    // // alignItems:'center',
    // alignContent:'center',
    backgroundColor: '#02a8f4',
    borderRadius: 40,

  },
  icon: {
    // alignItems:'center',
    alignSelf: 'center',
    // alignSelf: 'flex-end',
    // marginRight: 30,
    // backgroundColor:'red'

  }, item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 8,
    marginLeft:16,
    // marginHorizontal: 16,
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
    padding: 6,
    borderRadius: 5,
    // backgroundColor:'blue'
    color: 'white'
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  buttonn: {
    marginTop:10,
    width: 60,
    height:64,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red',
    // borderRadius:3,

  },
  buttonText: {
    fontWeight: 'bold',
    // opacity: colorEmphasis.high,
  },
  button1: {
    backgroundColor:'#02a8f4',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    // color: darkColors.primary,
  },
  button2: {
    backgroundColor:'red',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,  
    // color: darkColors.secondary,
  },
  // button3Text: {
  //   // color: darkColors.error,
  // },
  // contentContainerStyle: {
  //   flexGrow: 1,
  //   // backgroundColor: darkColors.backgroundColor,
  // },
  // iconEdit: {
  //   left: 25,
  // }
});

export default TODO;