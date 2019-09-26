import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import loginScreen from './nav-page/Login'
import manualScreen from './nav-page/Manual'
import menuDrawer from './menu-drawer-nav'


const AppNavigator = createDrawerNavigator({
  loginScreen,
  manualScreen,
  menuDrawer
},
{
  initialRouteName: 'loginScreen',
});


export default createAppContainer(AppNavigator);