import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {launchCamera} from 'react-native-image-picker';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState('');

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
      setImageUri(result.assets[0].uri || '');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={openCamera}>
        <Text style={styles.buttonText}>
          Open Camera
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

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
});