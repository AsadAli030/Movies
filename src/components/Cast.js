import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Person from '../screens/Person';
const {width, height} = Dimensions.get('window');

const Cast = ({cast, navigation}) => {
  let personName = 'Rowdey Junior';
  let characterName = 'Iron-Man';
  return (
    <View style={{marginTop: 15}}>
    <Text style={{fontSize: 24, color: 'white'}}> Top Cast</Text>
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, marginTop: 15}}>
        {cast.map((index, persons) => {
          return (
    <TouchableOpacity
              style={{alignItems: 'center', marginHorizontal: 5}}
              key={index}
              onPress={() => navigation.navigate('Person')}>
    <Image
                source={require('../images/picturerb.jpg')}
                style={styles.img1}
    />

              <Text style={{color: 'white'}}>{characterName}</Text>
              <Text style={{}}>
                {personName.length > 10
                  ? personName.slice(0, 10) + '...'
                  : personName}
    </Text>
    </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({
  img1: {
    height: height * 0.1,
    width: width * 0.2,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});
