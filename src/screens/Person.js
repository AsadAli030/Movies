import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import Movies from '../components/Movies';
const {width, height} = Dimensions.get('window');

const Person = () => {
  const navigation = useNavigation();
  const [isfavourite, togglefavourite] = useState(false);
  const [personMovie,setPersonMovie]=useState([1,2,3,4]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: height * 0.35,
            width: width * 0.7,
            borderRadius: 150,
            marginTop: width * 0.2,
            alignSelf: 'center',
            // borderColor: 'white',
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1,
            shadowRadius: 40,
          }}>
          <Image
            source={require('../images/picturerb.jpg')}
            style={styles.img1}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            Robert Downey.JR
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            London, United Kingdom
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            height: height * 0.09,
            width: width * 0.9,
            borderRadius: 100,
            backgroundColor: '#818589',
            borderColor: 'white',
            alignContent: 'center',
            alignSelf:'center'
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 20,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white'}}>Gender</Text>
            <Text style={{alignSelf: 'center'}}>Male</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'white',
              borderWidth: 0.5,
              marginVertical: 15,
              marginHorizontal: 8,
            }}></View>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>BirthDay</Text>
            <Text style={{alignSelf: 'center'}}>19-3-1980</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'white',
              borderWidth: 0.5,
              marginVertical: 15,
              marginHorizontal: 8,
            }}></View>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={{color: 'white'}}>Known For</Text>
            <Text style={{alignSelf: 'center'}}>Acting</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'white',
              borderWidth: 0.5,
              marginVertical: 15,
              marginHorizontal: 8,
            }}></View>
          <View style={{justifyContent: 'center', marginRight: 20}}>
            <Text style={{color: 'white'}}>Popularity</Text>
            <Text style={{alignSelf: 'center'}}>64.56</Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 24,
            marginTop: 20,
            fontWeight: 'bold',
            color: 'white',
            marginLeft:25
          }}>
          Biography
        </Text>
        <Text style={{marginLeft:25,marginRight:10,marginTop:10}}>
          Robert John Downey Jr. (born April 4, 1965)[1] is an American actor.
          His career has been characterized by critical success in his youth,
          followed by a period of substance abuse and legal troubles, before a
          surge in popular and commercial success later in his career. In 2008,
          Downey was named by Time magazine among the 100 most influential
          people in the world,[2][3] and from 2013 to 2015, he was listed by
          Forbes as Hollywood's highest-paid actor.[2][3] At the age of five, he
          made his acting debut in his father Robert Downey Sr.'s film Pound in
          1970. He subsequently worked with the Brat Pack in the teen films
          Weird Science (1985) and Less than Zero (1987). In 1992, Downey
          portrayed Charlie Chaplin in the biopic Chaplin, for which he was
          nominated for the Academy Award for Best Actor and won a BAFTA Award.
          Following a stint at the Corcoran Substance Abuse Treatment Facility
          on drug charges, he joined the TV series Ally McBeal, for which he won
          a Golden Globe Award. He was fired from the show in the wake of drug
          charges in 2000 and 2001. He stayed in a court-ordered drug treatment
          program and has maintained his sobriety since 2003.
        </Text>
        <Movies name={'Movies'}  data={personMovie} hhh={true}/>
      </ScrollView>
      <View style={styles.maincontainer}>
        <TouchableOpacity>
          <ChevronLeftIcon
            onPress={() => navigation.goBack()}
            size={35}
            style={{
              backgroundColor: 'orange',
              borderRadius: 5,
            }}
            strokeWidth={3}
            color={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglefavourite(!isfavourite)}>
          <HeartIcon
            size={40}
            color={isfavourite ? 'red' : 'white'}
            style={{marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 10,
  },
  img1: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    borderRadius: 150,
  },
});
