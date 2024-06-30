import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "@/app/screens/SettingsScreen";
import HomeScreen from "@/app/screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabsNavigator: React.FC = () => (
    <Tab.Navigator>
        <Tab.Screen name="Collections" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);

export default TabsNavigator;
