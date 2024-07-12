import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JournalScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Journal</Text>
        <Text style={styles.dateText}>Friday, 12 July</Text>
      </View>
      <View style={styles.entryListContainer}>
        {/* List of journal entries would go here */}
      </View>
      <View style={styles.addButtonContainer}>
        <Text style={styles.addButton}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#999999',
  },
  entryListContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    fontSize: 40,
    color: '#333333',
  },
});

export default JournalScreen;
