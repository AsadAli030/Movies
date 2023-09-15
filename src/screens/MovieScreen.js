import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import Movies from '../components/Movies';

const MovieScreen = () => {
  const navigation = useNavigation();
  const [isfavourite, togglefavourite] = useState(false);
  const [cast,setCast]=useState([1,2,3,4,5])
  const [person,setPerson]=useState([1,2,3,4,5])
  const [similar,setsimilar]=useState([1,2,3,4,5])

  let movieName = 'Iron-Man: The Double Standaard ';

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#303030'}}>
    {/* picture+gradient */}
      <View>
        <Image
          source={require('../images/picture1.jpg')}
          style={{resizeMode: 'cover', height: height * 0.55, width: width}}
        />

        <LinearGradient
          // colors={['transparent', '#4c669f', '#3b5998', '#192f6a']}
          colors={[
            'transparent',
            'rgba(30, 30, 30, 0.90)',
            'rgba(30, 30, 30, 1)',
          ]}
          style={{width, height: height * 0.1, position: 'absolute', bottom: 0}}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
        />
      </View>
{/* style top navigation */}
      <View
        style={styles.maincontainer}>
        <TouchableOpacity>
          <ChevronLeftIcon
            onPress={() => navigation.goBack()}
            size={35}
            style={{
            backgroundColor: 'orange', 
            borderRadius: 5}}
            strokeWidth={3}
            color={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglefavourite(!isfavourite)}>
          <HeartIcon
            size={40}
            color={isfavourite ? 'orange' : 'white'}
            style={{marginTop: 5}}
          />
        </TouchableOpacity>
      </View>

      {/* text */}
      <View style={{flex: 1, marginTop: -(height * 0.1)}}>
        <Text
          style={styles.txt1}>
          {movieName}
        </Text>
        <Text
          style={styles.txt2}>
          {'Released : 2020 . 170min'}
        </Text>
        <View
          style={styles.txt3}>
          <Text style={{fontSize: 16}}>Action </Text>
          <Text style={{fontSize: 16}}>Thriler </Text>
          <Text style={{fontSize: 16}}>Comedy </Text>
        </View>
        <Text
          style={styles.txt4}>
          Tony Stark is charismatic and eccentric, he is also very proud, but
          also very altruist and heroic. He did not have a good childhood, and
          this affects how he acts. Stark is very smart, and a very talented
          inventor. His technology is always very advanced, and Iron Man is his
          greatest piece of.
        </Text>
      </View>
      {/* cast */}
      <Cast navigation={navigation} cast={cast}/>
<Movies name='Similar Movies' navigation={navigation}  data={similar} hhh={true}/>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  maincontainer:{
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 10,
  },
  txt1:{
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
  txt2:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  txt3:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  txt4:{
    marginHorizontal: 20,
    justifyContent: 'center',
    marginTop: 20,
  }
});
