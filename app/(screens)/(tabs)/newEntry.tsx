import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NewEntryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.newEntryText}>New Entry</Text>
      <TextInput style={styles.titleInput} placeholder="Title" />
      <TextInput style={styles.contentInput} placeholder="Content" multiline={true} />
      <View style={styles.categoryContainer}>
        <Text style={styles.fieldLabel}>Category</Text>
        <TextInput style={styles.categoryInput} placeholder="Select Category" />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.fieldLabel}>Date</Text>
        <Text style={styles.dateInput}>2024-07-12</Text>
      </View>
      <View style={styles.saveButtonContainer}>
        <Text style={styles.saveButton}>Save</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  newEntryText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  contentInput: {
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 150,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#999999',
  },
  categoryInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  saveButtonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  saveButton: {
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default NewEntryScreen;
