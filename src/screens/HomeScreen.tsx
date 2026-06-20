import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SafeRoadAI 🚦
      </Text>

      <Text style={styles.subtitle}>
        AI Powered Road Safety Detection
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Camera')
        }>
        <Text style={styles.buttonText}>
          Open Camera
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});