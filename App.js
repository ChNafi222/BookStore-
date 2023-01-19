import { BookDetail } from "./screens/";
import  Login  from "./screens/Login";
import MyCartdetails from "./screens/MyCartdetails";
import MyCart from "./screens/MyCart";
import userProfile from "./screens/userProfile";

import setting from "./screens/setting";

import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import 'react-native-gesture-handler';



const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        })

    if(!loaded){
        return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />

                 <Stack.Screen name="Login" component={Login}  />

                 <Stack.Screen name="MyCartdetails" component={MyCartdetails} />

                 <Stack.Screen name="MyCart" component={MyCart} />

                 <Stack.Screen name="userProfile" component={userProfile} />

                 <Stack.Screen name="setting" component={setting} />


              
                 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;