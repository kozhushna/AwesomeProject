import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  VirtualizedList,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UserImage from '../Images/User.png';
import MessageCircle from '../Icons/MessageCircle.svg';

const PUBLICATIONS = [
  {
    id: '1',
    image: require('../Images/Forest.jpg'),
    title: 'Ліс',
    comments: '8',
    likes: '153',
    location: "Ivano-Frankivs'k Region, Ukraine",
    latitude: 48.9215,
    longitude: 24.70972,
  },
  {
    id: '2',
    image: require('../Images/Sea.jpg'),
    title: 'Захід на Чорному морі',
    comments: '3',
    likes: '200',
    location: 'Ukraine',
    latitude: 46.482952,
    longitude: 30.712481,
  },
  {
    id: '3',
    image: require('../Images/Home.jpg'),
    title: 'Старий будиночок у Венеції',
    comments: '50',
    likes: '200',
    location: 'Italy',
    latitude: 45.438759,
    longitude: 12.327145,
  },
];

const PostsScreen = () => {
  const [publications, setPublications] = useState(PUBLICATIONS);

  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.panelHolder}>
        <View style={styles.activitiesHolder}>
          <View style={styles.commentsHolder}>
            <MessageCircle />

            <Text style={styles.text}>{item.comments}</Text>
          </View>
        </View>
        <View style={styles.locationHolder}>
          <AntDesign name="enviromento" size={24} color="#BDBDBD" />
          <TouchableOpacity
            title="Location"
            onPress={() =>
              navigation.navigate('Map', {
                latitude: item.latitude,
                longitude: item.longitude,
              })
            }
            color="white"
          >
            <Text style={[styles.text, styles.underline]}>{item.location}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
      latitude: entity.latitude,
      longitude: entity.longitude,
    };
  };

  const getItemCount = (_data) => publications.length;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.holder}>
        <Image source={UserImage} />
        <View style={styles.textHolder}>
          <Text style={styles.caption}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    height: '100%',
    paddingBottom: 32,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },

  holder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
    marginLeft: 8,
  },

  textHolder: {
    flex: 1,
  },

  caption: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },

  email: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    paddingHorizontal: 8,
    marginBottom: 32,
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

  panelHolder: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 12,
  },

  commentsHolder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  locationHolder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  activitiesHolder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  text: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default PostsScreen;
