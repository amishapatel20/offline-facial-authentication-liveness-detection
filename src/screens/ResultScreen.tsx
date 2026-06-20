import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Detection Result 🚨
      </Text>

      <Text style={styles.result}>
        Road Damage Detected
      </Text>

      <Text style={styles.confidence}>
        Confidence: 92%
      </Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 20,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  result: {
    color: 'red',
    fontSize: 24,
    marginBottom: 20,
  },

  confidence: {
    color: 'white',
    fontSize: 20,
  },
});