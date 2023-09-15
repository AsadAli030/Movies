import {
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Trendingmovies from '../components/Trendingmovies';
import Movies from '../components/Movies';
import { useNavigation } from '@react-navigation/native';



const Home = ({props}) => {
const[trending,setTrending]=useState([1,2,3,4,5])  
const[upcoming,setUpcoming]=useState([1,2,3,4,5])  
const[topRated,setTopRated]=useState([1,2,3,4,5])  
const navigation=useNavigation('');
  return (
    <View style={{flex: 1, backgroundColor: '#303030'}}>
      <StatusBar style={{backgroundColor: '#303030'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Bars3CenterLeftIcon size={30} Width={2} color={'white'} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'yellow', fontSize: 30}}>M</Text>
          <Text style={{color: 'white', fontSize: 30}}>ovies</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('SearchScreen')}>
          <MagnifyingGlassIcon size={30} color={'white'} />
        </TouchableOpacity>
      </View>
 <ScrollView showsHorizontalScrollIndicator
 contentContainerStyle={{paddingBottom:10}}>
  {/* trending movies */}
  <Trendingmovies data={trending}  />
  {/* movies list */}
  <Movies  
  name='Upcoming'
  data={upcoming} 
   />
  {/* Top Rated */}
  <Movies  
  name='Top Rated Movies'
  data={topRated} 
   />
 </ScrollView>
    








    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
