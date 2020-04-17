import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();

import Login from './pages/Login';
import Main from './pages/Main';
import EventDetail from './pages/EventDetail';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="EventDetail" component={EventDetail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

