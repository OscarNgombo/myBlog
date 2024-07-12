import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet,TextInput, Pressable } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.accountText}>Account</Text>
      <View style={styles.formContainer}>
        <Text style={styles.fieldLabel}>Username</Text>
        <TextInput style={styles.fieldValue}>your_username</TextInput>
        <Text style={styles.fieldLabel}>Password</Text>
        <TextInput style={styles.fieldValue}>••••••••</TextInput>
        <View style={styles.saveButtonContainer}>
        <Link href="/home" asChild>
        <Pressable>
          <Text style={styles.saveButton}>Login</Text>
          </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#d3d3d3',
  },
  accountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    padding: 20,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 10,
  },
  fieldValue: {
    flexDirection: 'row', 
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  saveButtonContainer: {
    alignItems: 'center',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
});

export default AccountScreen;
