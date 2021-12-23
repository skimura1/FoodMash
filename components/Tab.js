import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const homeName = 'Home';
const messagesName = 'Messages';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === messagesName) {
            iconName = focused ? 'mail' : 'mail-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
        name={homeName}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={messagesName}
        component={MessagesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={profileName}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
