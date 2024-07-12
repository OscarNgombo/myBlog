import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JournalEntryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>Today</Text>
      <View style={styles.entryContainer}>
        <Text style={styles.entryText}>Woke up in a great mood</Text>
        <Text style={styles.timeText}>9:00 AM</Text>
        <Text style={styles.entryText}>Had a great day at work</Text>
        <Text style={styles.timeText}>11:00 PM</Text>
        <Text style={styles.entryText}>Read a book, went to bed</Text>
        <Text style={styles.timeText}>10:00 PM</Text>
      </View>
      {/* <View style={styles.navigationContainer}>
        <Text style={styles.navigationButton}>Home</Text>
        <Text style={styles.navigationButton}>Journal</Text>
        <Text style={styles.navigationButton}>Profile</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  entryContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  entryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationButton: {
    fontSize: 14,
    color: '#333333',
  },
});

export default JournalEntryScreen;
