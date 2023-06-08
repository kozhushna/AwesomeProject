import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import FormContainer from '../Components/FormContainer';
import AvatarImageHolder from '../Components/AvatarImageHolder';

const PUBLICATIONS = [
  {
    id: '1',
    image: require('../Images/Forest.jpg'),
    title: 'Ліс',
    comments: '8',
    likes: '153',
    location: 'Ukraine',
  },
  {
    id: '2',
    image: require('../Images/Sea.jpg'),
    title: 'Захід на Чорному морі',
    comments: '3',
    likes: '200',
    location: 'Ukraine',
  },
  {
    id: '3',
    image: require('../Images/Home.jpg'),
    title: 'Старий будиночок у Венеції',
    comments: '50',
    likes: '200',
    location: 'Italy',
  },
];

const ProfileScreen = () => {
  const [publications, setPublications] = useState(PUBLICATIONS);

  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <AntDesign name="like2" size={24} color="black" />
      <Text style={styles.text}>{item.comments}</Text>
      <EvilIcons name="comment" size={24} color="black" />
      <Text style={styles.text}>{item.likes}</Text>
      <AntDesign name="enviromento" size={24} color="#BDBDBD" />
      <Text style={styles.text}>{item.location}</Text>
    </View>
  );

  const getItem = (_data, index) => {
    const entity = publications[index];
    return {
      id: entity.id,
      title: entity.title,
      image: entity.image,
      comments: entity.comments,
      likes: entity.likes,
      location: entity.location,
    };
  };

  const getItemCount = (_data) => publications.length;

  return (
    <FormContainer>
      <View style={styles.container}>
        <AvatarImageHolder />
        <Entypo name="log-out" size={24} color="black" />
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
    paddingHorizontal: 8,
    paddingVertical: 32,
  },
  image: {
    width: 343,
    height: 240,
    marginRight: 10,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    marginVertical: 8,
  },
});

export default ProfileScreen;
