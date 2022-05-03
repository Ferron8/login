import { SafeAreaView, StyleSheet } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.js/ForgotPassword';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './components/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    
    <Navigation/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});