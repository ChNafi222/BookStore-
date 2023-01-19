import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { color } from "react-native-reanimated";


const Login = ({ route, navigation })  => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View  style={{
      flex: 1,
    backgroundColor: COLORS.darkBlue,
    alignItems: "center",
    justifyContent: "center",
      
  }}>
    

        <TouchableOpacity style={styles.title}>
        <Text style={styles.titleText} >Deja Vu Bookstore</Text> 
        </TouchableOpacity>


         {/*  */}
      <StatusBar style="auto" />
      <View style={{backgroundColor: COLORS.primary,
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center"}}>

      {/*  email textbox */}
        <TextInput
          style={styles.inputtext}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 


      {/*  pass word partt */}
      <View style={{backgroundColor: COLORS.primary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",}}>
        <TextInput
          style={styles.inputtext}
          placeholder="Password "
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 


      {/*  forgot password */}
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>


        {/*  login button  for  */}
        <Text style={styles.loginText} onPress={() => navigation.navigate('Home')}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  inputtext:{
    height: 50,
    color:COLORS.white,
    fontSize:SIZES.h3,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:COLORS.white,
    fontSize:SIZES.body2,
    ...FONTS.h2, 
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: COLORS.primary,
  },
  loginText: {
    fontSize:SIZES.body2,
    ...FONTS.h2, 
  },
  title:
  {
    backgroundColor:COLORS.secondary,
    marginBottom:50,
  },
  titleText:{
    fontSize:SIZES.h1,
    color:COLORS.white,
    ...FONTS.h1, 
  }

});
export default Login;