import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CameraScreen from '../screens/CameraScreen';
import ListOfItemScreen from '../screens/ListOfItemScreen';
import PhotoInformationScreen from '../screens/PhotoInformationScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        "ios-home"
      }
    />
  ),
};

HomeStack.path = '';

const CameraStack = createStackNavigator(
  {
    Camera: CameraScreen,
  },
  config
);

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'} />
  ),
};

CameraStack.path = '';

const ListOfItemStack = createStackNavigator(
  {
    ListOfItem: ListOfItemScreen,
  },
  config
);

ListOfItemStack.navigationOptions = {
  tabBarLabel: 'ListOfItem',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-list"}/>
  ),
};

ListOfItemStack.path = '';

const PhotoInformationStack = createStackNavigator(
  {
    PhotoInformation: PhotoInformationScreen,
  },
  config
);

PhotoInformationStack.navigationOptions = {
  tabBarLabel: 'TakenPhoto',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        "ios-checkbox-outline"
      }
    />
  ),
};

PhotoInformationStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CameraStack,
  PhotoInformationStack,
  ListOfItemStack
});

tabNavigator.path = '';

export default tabNavigator;
