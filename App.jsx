
import { StyleSheet, View } from 'react-native';
import Overview from './src/pages/Overview';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './src/components/CustomDrawer';
import Info from './src/pages/Info';

export default function App() {


  const Drawer = createDrawerNavigator();


  return (

    <NavigationContainer >
      <Drawer.Navigator initialRouteName='Overview' drawerContent={props => <CustomDrawer {...props} />} >
        <Drawer.Screen
          name='Overview'
          component={Overview}
          options={{
            headerStyle: {
              backgroundColor: "#a64942",
              height: 0,

            },


          }}

        />
    <Drawer.Screen
     name='info'
      component={Info}
      options={{
        headerStyle: {
          backgroundColor: "#a64942",
          height: 0,

        },


      }}
      />

 
      

      </Drawer.Navigator>
    </NavigationContainer>

  );
}


