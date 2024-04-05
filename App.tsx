import Overview from './src/pages/Overview';
import {createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer, TypedNavigator } from '@react-navigation/native';
import CustomDrawer from './src/components/CustomDrawer';
import Info from './src/pages/Info';
import List from './src/pages/List';


export type RootDrawerNavigatorParamsList = {
  overview: undefined;
  list: undefined;
  info: undefined;
 
};

export default function App() {


  const Drawer = createDrawerNavigator<RootDrawerNavigatorParamsList>();


  return (

    <NavigationContainer >
      <Drawer.Navigator initialRouteName='overview' drawerContent={props => <CustomDrawer props={props}  />} >
        <Drawer.Screen
          name='overview'
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
<Drawer.Screen
     name='list'
      component={List}
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


