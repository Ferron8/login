import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text
} from "react-native";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomInput/CustomButton";
import SocialSignInButtons from "../../../components/CustomInput/SocialSignInButtons/SocialSignInButtons";

const navigation = useNavigation();

const SignUpScreen = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordRepeat, setpasswordRepeat] = useState("");
  const [Email, setEmail] = useState("");

  const { height } = useWindowDimensions();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmailScreen');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsofUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email"
         value={Email}
          setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput placeholder="PasswordRepeat"
         value={PasswordRepeat}
        setValue={setpasswordRepeat}
        secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text styles={styles.text}>
          By registering, you confirm that you accept our{' '}
         <Text style={styles.link} onPress={onTermsOfUsePressed}>
           Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
          </Text>

        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in"
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

export default SignUpScreen;
