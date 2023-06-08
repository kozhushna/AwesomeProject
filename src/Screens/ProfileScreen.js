import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  VirtualizedList,
} from 'react-native';
import FormContainer from '../Components/FormContainer';
import AvatarImageHolder from '../Components/AvatarImageHolder';

const PUBLICATIONS = [
  {
    id: '1',
    image: require('../Images/Forest.jpg'),
    title: '1',
  },
  {
    id: '2',
    image: require('../Images/Sea.jpg'),
    title: '1',
  },
  {
    id: '3',
    image: require('../Images/Home.jpg'),
    title: '1',
  },
];

const ProfileScreen = () => {
  const [publications, setPublications] = useState(PUBLICATIONS);

  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
      {/* <Ionicons name="ios-star" size={24} color="gold" /> */}
    </View>
  );

  const getItem = (_data, index) => {
    const entity = publications[index];
    return {
      id: entity.id,
      title: entity.title,
      image: entity.image,
    };
  };

  const getItemCount = (_data) => publications.length;

  return (
    <FormContainer>
      <View style={styles.container}>
        <AvatarImageHolder />
        <SafeAreaView style={styles.mainContainer}>
          <VirtualizedList
            data={publications}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </SafeAreaView>
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 103,
    minHeight: 665,
    paddingBottom: 45,
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 343,
    height: 240,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    // flex: 1,
    marginRight: 10,
  },
});

export default ProfileScreen;
