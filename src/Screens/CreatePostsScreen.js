import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

const CreatePostScreen = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.fotoInput}>
          <View style={styles.imageHolder}>
            <AntDesign name="camera" size={24} color="#BDBDBD" />
          </View>
        </View>
        <Pressable title="Upload" style={styles.uploadButton}>
          <Text style={styles.buttonText}>Завантажте фото</Text>
        </Pressable>
        <TextInput
          style={styles.inputName}
          placeholder="Назва..."
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.inputLocation}
          placeholder="Місцевість..."
          onChangeText={setLocation}
          value={location}
        />
        <Text style={styles.locationImage}>
          <AntDesign name="enviromento" size={24} color="#BDBDBD" />
        </Text>

        <Pressable
          title="publish"
          style={styles.button}
          // onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Опублікувати</Text>
        </Pressable>
        <View style={styles.buttonHolder}>
          <Pressable
            title="delete"
            style={styles.deleteButton}
            // onPress={() => navigation.navigate('Home')}
          >
            <AntDesign name="delete" size={24} color="#DADADA" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 34,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },

  fotoInput: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    marginBottom: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },

  imageHolder: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
  },

  uploadButton: {
    width: 131,
    height: 19,
    marginBottom: 32,
  },

  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    textAlign: 'center',
  },

  text: {
    marginBottom: 32,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    color: '#BDBDBD',
  },

  inputName: {
    height: 50,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  inputLocation: {
    paddingLeft: 32,
    height: 50,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  locationImage: {
    position: 'absolute',
    top: 410,
    left: 20,
  },

  button: {
    paddingVertical: 15,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    marginBottom: 120,
  },

  buttonHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 34,
  },

  deleteButton: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});

export default CreatePostScreen;
