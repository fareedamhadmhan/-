import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import dashboardScreen from './dash-info-nav'
import dashboard_summaryScreen from './nav-page/DashboardSummary'
import loginScreen from './nav-page/Login'


class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('../src/img/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


const dashboard_summaryScreen_StackNavigator = createStackNavigator({
    dashboard_summary: {
        screen: dashboard_summaryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'ภาพรวมระบบ',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const dashboardScreen_StackNavigator = createStackNavigator({
    dashboard: {
        screen: dashboardScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'ผู้ใช้งาน',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const loginScreen_StackNavigator = createStackNavigator({
    dashboard: {
        screen: dashboardScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'ออกจากระบบ',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});


const DrawerNavigatorExample = createDrawerNavigator({
    dashboard_summaryScreen: {
        screen: dashboard_summaryScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'ภาพรวมระบบ',
        },
    },
    dashboardScreen: {
        screen: dashboardScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'ผู้ใช้งาน',
        },
    },
    loginScreen: {
        screen: loginScreen,
        navigationOptions: {
            drawerLabel: 'ออกจากระบบ',
        },
    }
},
    {
        initialRouteName: 'dashboard_summaryScreen',
    });

export default createAppContainer(DrawerNavigatorExample);