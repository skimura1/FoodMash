import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Swiper from 'react-native-deck-swiper';
import data from './data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const cardsData = [
  {
    id: '0',
    image: require('../assets/images/pfp1.png'),
    name: 'test1',
    age: '25',
    food1: require('../assets/foods/curry.jpg'),
    food2: require('../assets/foods/hamburger.jpg'),
    food3: require('../assets/foods/ramen.jpg'),
  },
  {
    id: '1',
    image: require('../assets/images/sample1.jpg'),
    name: 'test2',
    age: '45',
    food1: require('../assets/foods/curry.jpg'),
    food2: require('../assets/foods/hamburger.jpg'),
    food3: require('../assets/foods/ramen.jpg'),
  },
  {
    id: '2',
    image: require('../assets/images/sample2.jpg'),
    name: 'test3',
    age: '23',
    food1: require('../assets/foods/curry.jpg'),
    food2: require('../assets/foods/hamburger.jpg'),
    food3: require('../assets/foods/ramen.jpg'),
  },
  {
    id: '3',
    image: require('../assets/images/sample3.jpg'),
    name: 'test4',
    age: '65',
    food1: require('../assets/foods/curry.jpg'),
    food2: require('../assets/foods/hamburger.jpg'),
    food3: require('../assets/foods/ramen.jpg'),
  },
  {
    id: '4',
    image: require('../assets/images/sample4.jpg'),
    name: 'test2',
    age: '45',
    food1: require('../assets/foods/curry.jpg'),
    food2: require('../assets/foods/hamburger.jpg'),
    food3: require('../assets/foods/ramen.jpg'),
  },
];

export const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000',
};

const Card = ({card}) => {
  return (
    <View style={styles.card}>
      <Image source={card.image} style={styles.cardImage} />
      <View style={styles.cardDetails} key={card.id}>
        <Text style={[styles.text, styles.age]}>{card.age}</Text>
        <Text style={[styles.text, styles.name]}>{card.name}</Text>
      </View>
      <View style={styles.foodContainer}>
        <Image source={card.food1} style={styles.food} />
        <Image source={card.food2} style={styles.food} />
        <Image source={card.food3} style={styles.food} />
      </View>
    </View>
  );
};

const CardDetails = ({index}) => (
  <View style={styles.cardDetails} key={data[index].id}>
    <Text style={[styles.text, styles.heading]}>{data[index].name}</Text>
    <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
  </View>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const HomeScreen = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={cardsData}
          cardIndex={index}
          renderCard={card => <Card card={card} />}
          onSwiped={onSwiped}
          stackSize={3}
          stackSeparation={0}
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          cardVerticalMargin={50}
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.red,
                  color: colors.white,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.blue,
                  color: colors.white,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const cardStyle = {
  width: width - 20,
  height: height - 100,
  borderRadius: 8,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80c0f3',
  },
  swiperContainer: {
    flex: 0.55,
  },
  cardDetails: {
    top: height - 270,
    right: width - 80,
    position: 'absolute',
  },
  text: {
    fontFamily: 'Montserrat',
  },
  age: {
    color: colors.white,
    fontSize: 19,
  },
  name: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 40,
    ...cardStyle,
  },
  cardImage: {
    resizeMode: 'cover',
    ...cardStyle,
  },
  foodContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: height - 200,
    width: width - 20,
    height: 100,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingTop: 5,
  },
  food: {
    width: 90,
    height: 90,
    borderRadius: 400,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: colors.gray,
  },
});
