import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {height, width, colors} from '../src/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      </View>
      <Image
        style={styles.profilePicture}
        source={require('../assets/images/pfp1.png')}
      />
      <View style={styles.foodContainer}>
        <Image
          style={styles.food}
          source={require('../assets/foods/pho.jpg')}
        />
        <Image
          style={styles.food}
          source={require('../assets/foods/friedchicken.jpg')}
        />
        <Image
          style={styles.food}
          source={require('../assets/foods/kbbq.jpg')}
        />
      </View>
      <View style={styles.myInfo}>
        <Text style={styles.bio}>Bio: </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(226,234,236,0.68)',
  },
  profilePicture: {
    height: height - 300,
    width: width,
    resizeMode: 'cover',
    borderRadius: 20,
    top: 50,
  },
  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    width: width - 60,
    height: 80,
    borderRadius: 200,
    top: 55,
  },
  food: {
    top: 5,
    width: 70,
    height: 70,
    borderRadius: 400,
    resizeMode: 'cover',
    borderColor: colors.gray,
    borderWidth: 2,
  },
  myInfo: {
    top: 60,
    backgroundColor: colors.white,
    width: width,
    flex: 1,
    borderRadius: 30,
  },
  bio: {
    left: 20,
    top: 10,
  },
  topBar: {
    bottom: height,
  },
});
