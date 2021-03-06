import React, {Component} from 'react';
import Home from './screen/Home';
import Detail from './screen/Detail';
import Category from './screen/Category';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Dumb-Tick',
      },
      headerStyle: {
        backgroundColor: '#f44336',
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Detail',
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        title: 'Category',
      },
      headerStyle: {
        backgroundColor: '#f44336',
      },
      headerTintColor: '#f44336',
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);