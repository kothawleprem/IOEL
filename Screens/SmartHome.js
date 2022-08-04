import { StyleSheet, Text, TouchableOpacity, View, Switch, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import data from './Data';


const SmartHome = () => {
  const [toggle, setToggle] = useState(false);
  if (toggle == true) {
    axios.get('https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=1&value=0', {

    })
      .then(function (response) {
        // setLoading(false);
      })
      .catch(function (error) {
      });
  } else if (toggle == false) {
    axios.get('https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=1&value=1', {

    })
      .then(function (response) {
        // setLoading(false);
      })
      .catch(function (error) {
      });

  }

  const clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. ' + item.name);
  }


  return (
    <View style={styles.container}>
      {/* <Text>SmartHome</Text> */}
      <View style={styles.container}>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} onPress={clickEventListener}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.count}>{item.count}</Text>
                  <TouchableOpacity style={styles.followButton} onPress={clickEventListener}>
                    {/* <Text style={styles.followButtonText}>Explore now</Text>   */}
                    <Switch
                      trackColor={{ false: 'gray', true: 'teal' }}
                      thumbColor="white"
                      onValueChange={(value) => setToggle(value)}
                      value={toggle}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }} />
      </View>


    </View>
  )
}

export default SmartHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#3399ff",
    fontWeight: 'bold'
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },

})