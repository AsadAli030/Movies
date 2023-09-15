import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');


const Movies = (props) => {
 const data= props.data
// const data=[1,2,3]
  const navigation = useNavigation('');
  let moviexyz = 'Ant-Man and the Wasp: Quantiminia';

  return (
    <View>
      <View style={styles.maincontainer}>
        <Text style={{fontSize: 24,marginLeft:15}}>{props.name}</Text>
        {props.hhh?null:
        <TouchableOpacity>
          <Text style={{color:'yellow'}}>See All</Text>
        </TouchableOpacity>
}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {
        data.map((item, index) => {
          return (
            data?
            <TouchableWithoutFeedback key={index}
            >
              <View style={{marginTop: 15, alignItems: 'center'}}>
                <Image
                  source={require('../images/picture1.jpg')}
                  style={styles.firstimage}
                />
                <Text>
                  {moviexyz.length > 14
                    ? moviexyz.slice(0, 20) + '...'
                    : moviexyz}
                </Text>
              </View>
            </TouchableWithoutFeedback>:
            <Text>Loding</Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 30,
  },
  firstimage: {
    height: height * 0.3,
    width: width * 0.4,
    resizeMode: 'contain',
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
