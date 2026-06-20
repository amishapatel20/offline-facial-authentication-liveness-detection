import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {launchCamera} from 'react-native-image-picker';

const LivenessScreen = () => {
  const [imageUri, setImageUri] = useState('');
  const [message, setMessage] = useState(
    'Ready for Verification',
  );

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
      saveToPhotos: true,
    });

    if (
      result.assets &&
      result.assets.length > 0
    ) {
      const uri = result.assets[0].uri || '';

      setImageUri(uri);

      setMessage(
        'Face Captured Successfully ✅',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Offline Face Authentication
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={openCamera}>
        <Text style={styles.buttonText}>
          Start Verification
        </Text>
      </TouchableOpacity>

      {imageUri !== '' && (
        <Image
          source={{uri: imageUri}}
          style={styles.image}
        />
      )}
    </View>
  );
};

export default LivenessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  message: {
    color: '#4CAF50',
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  image: {
    width: 250,
    height: 350,
    borderRadius: 15,
  },
});