import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Text } from "react-native";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomInput/CustomButton";
import SocialSignInButtons from "../../../components/CustomInput/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    //validate user
  };

  const onForgotPasswordPressed= () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUpScreen');
  };




  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

      <CustomInput
        placeholder="Username"
        value={Username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton text="Forgot Password"
       onPress={onForgotPasswordPressed}
        type="TERTIARY" />

<SocialSignInButtons />

<CustomButton
       text="Don't have an account? Create one"
       onPress={onSignUpPressed}
        type="TERTIARY" />
    </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  
});

export default SignInScreen;