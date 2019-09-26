import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import dashboardScreen from './nav-page/Dashboard'
import User_infoScreen from './nav-page/User_info'



const AppNavigator = createDrawerNavigator({
    dashboardScreen,
    User_infoScreen
}, {
        initialRouteName: 'dashboardScreen',
    });


export default createAppContainer(AppNavigator);