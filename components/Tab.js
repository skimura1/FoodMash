import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';

const homeName = 'Home';
const messagesName = 'Messages';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
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
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          options={{
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
    </NavigationContainer>
  );
};

export default Tabs;
