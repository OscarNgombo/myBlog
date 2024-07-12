// app/HomeScreen.tsx
import { Link } from 'expo-router';
import { View, Text, StyleSheet, useColorScheme, Pressable } from 'react-native';

function HomeScreen() {
  const colorScheme = useColorScheme();


  return (
    <View style={[styles.container, colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title,colorScheme === 'dark' ? styles.darkTitle : styles.lightTitle]}>My Journal!</Text>
      <View style={styles.buttonsContainer}>
      <Text style={[styles.bodyText,styles.signUpText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>Continue to sign up for free</Text>
        <Text style={[styles.bodyText,styles.loginText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>If you already have an account, we'll log you in.</Text>
        <View style={styles.socialButtonContainer}>
        <Pressable style={styles.button}>
          <Text style={[styles.bodyText,styles.socialButtonText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>Continue with Apple</Text>
          </Pressable>
          </View>
          <View style={styles.socialButtonContainer}>
          <Pressable style={styles.button}>
          <Text style={[styles.bodyText,styles.socialButtonText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>Continue with Google</Text>
          </Pressable>
          </View>
          <View style={styles.socialButtonContainer}>
          <Text style={[styles.bodyText,styles.socialButtonText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>Continue with Facebook</Text>
          </View>
          <View style={styles.socialButtonContainer}>
          <Link href="(screens)/login" asChild>
          <Pressable style={styles.button}>
          <Text style={[styles.bodyText,styles.socialButtonText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>Continue another way</Text>
        </Pressable></Link>
        </View>
      </View>
      <View style={styles.termsContainer}>
          <Text style={[styles.bodyText,styles.termsText, colorScheme === 'dark' ? styles.darkBodyText : styles.lightBodyText]}>By continuing, you agree to the Terms of Use. Read our Privacy Policy.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  darkContainer: {
    backgroundColor: '#222', 
  },
  lightContainer: {
    backgroundColor: '#fff', 
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
    marginBottom: 30,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  socialButtonText: {
    fontSize: 16,
  },
  termsContainer: {
    marginBottom: 40,
  },
  termsText: {
    fontSize: 12,
    color: '#999999',
  },
  darkTitle: {
    color: '#fff', // Light color for dark mode
  },
  lightTitle: {
    color: '#000', // Dark color for light mode
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  darkBodyText: {
    color: '#fff', // Light color for dark mode
  },
  lightBodyText: {
    color: '#000', // Dark color for light mode
  },
});

export default HomeScreen;
