import 'react-native-gesture-handler';
import {Button, Text, View} from 'react-native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {WithSafeAreaView} from './src/component/WithSafeAreaView';
import {HomeProps, ProfileProps, RootStackParamList} from './src/types/navigationsTypes';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';


function HomeScreen({navigation}: HomeProps) {
  return (
    <WithSafeAreaView>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Profile')} title={'go to profile'}/>
      </View>
    </WithSafeAreaView>
  );
}

function ProfileScreen({navigation}: ProfileProps) {
  return (
    <WithSafeAreaView>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text>Profile Screen</Text>
        <Button onPress={() => navigation.navigate('Home')} title={'go to home'}/>
      </View>
    </WithSafeAreaView>
  );
}


//const Stack = createNativeStackNavigator<RootStackParamList>();
//const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        {/*<Stack.Navigator initialRouteName="Home">*/}
        {/*  <Stack.Screen name="Home" component={HomeScreen}/>*/}
        {/*  <Stack.Screen name="Profile" component={ProfileScreen}/>*/}
        {/*</Stack.Navigator>*/}

        {/*<Tab.Navigator>*/}
        {/*  <Tab.Screen name="Home" component={HomeScreen}/>*/}
        {/*  <Tab.Screen name="Profile" component={ProfileScreen}/>*/}
        {/*</Tab.Navigator>*/}

        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="Profile" component={ProfileScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
