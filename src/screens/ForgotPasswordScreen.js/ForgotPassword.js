import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  
} from "react-native";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomInput/CustomButton";
import SocialSignInButtons from "../../../components/CustomInput/SocialSignInButtons/SocialSignInButtons";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");


  const onSendPressed = () => {
    console.warn("onSendPressed");
  };

  const onSignInPressed = () => {
    console.warn("OnSignInPressed");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onResendPressed = () => {
    console.warn("onResendPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Rest your password</Text>
        
        <CustomInput placeholder="Username"
         value={username}
        setValue={setUsername}
        secureTextEntry
        />
        

        <CustomButton
          text="Send"
          onPress={onSendPressed}
        />
        
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  }
});

export default ForgotPasswordScreen;