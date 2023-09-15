import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import Movies from './Movies';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import MovieScreen from '../screens/MovieScreen';


const Trendingmovies = ({data}) => {
const navigation = useNavigation();
  const HandleClick=(item)=>{
navigation.navigate('MovieScreen' ,item)
}
  return (
    <View style={{marginTop:10}}>
 <Text style={{fontSize:24}}> Trendingmovies</Text>
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} HandleClick={HandleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.6}
        slideStyle={{display: 'flex', alignItems: 'center', marginTop: 10}}
      />
    </View>
  );
};
const MovieCard = ({item,HandleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={()=>HandleClick(item)}>
      <View>
        <Image
          source={require('../images/picture1.jpg')}
          style={{
            width: width * 0.6,
            height: height * 0.4,
            resizeMode: 'contain',
            borderRadius: 20,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Trendingmovies;

const styles = StyleSheet.create({});
