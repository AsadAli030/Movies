import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardView from '../components/CardView';
const {height, width} = Dimensions.get('window');

const SearchScreen = () => {
  const moviename = ' Iron Man and the wasp:Quantiminia ';
  const navigation = useNavigation();
  const [results, setResult] = useState([1, 2, 3, 4,5,6]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#303030'}}>
      <View style={styles.ViewSearchBar}>
        <TextInput placeholder="Search Movie" placeholderTextColor={'gray'} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.textInput}>
          <XMarkIcon size={25} color={'white'} />
        </TouchableOpacity>
      </View>
<View>
      <Text
        style={{
          color: 'white',
          marginLeft: 30,
          marginTop: 10,
          marginBottom: 10,
        }}>
        Results({results.length})
      </Text>
      </View>
      <View style={{ justifyContent: 'space-between'}}>
        <FlatList
          data={results}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={{flexDirection:'row'}}>
              <CardView/>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  ViewSearchBar: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.08,
    width: width * 0.9,
    borderWidth: 0.5,
    borderColor: 'white',
    alignSelf: 'center',
    borderRadius: 100,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 40,
    width: 40,
    backgroundColor: 'silver',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
