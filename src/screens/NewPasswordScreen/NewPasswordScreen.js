import { useNavigation } from "@react-navigation/native";
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


const navigation = useNavigation();

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");



  const onSubmitPressed = () => {
    console.warn("onSubmitPressed")
  };

  const onSignInPressed = () => {
    navigation.navigate('SignInScreen');
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Rest your password</Text>
        
        <CustomInput placeholder="Code"
         value={code}
        setValue={setCode}
        />

        <CustomInput placeholder="Enter your new password"
         value={newPassword}
        setValue={setNewPassword}
        />
        

        <CustomButton
          text="Submit"
          onPress={onSubmitPressed}
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

export default NewPasswordScreen;