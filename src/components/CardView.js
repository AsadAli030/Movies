import { StyleSheet, Text,Dimensions, View,TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('window');
const CardView = (props) => {
    const data=props
    console.log('Data',data)

    let movieName = 'Iron-Man: The Double Standaard ';

    return (
    <TouchableWithoutFeedback
    // key={index}
    // onPress={() => navigation.push('MovieScreen',item)}
    style={{margin: 5}}
  >
    <View style={{margin:10}}>
      <Image
        source={require('../images/picture1.jpg')}
        style={{
          height: height * 0.3,
          width: width * 0.44,
          borderRadius: 20,
        }}
        
      />
      <Text style={{marginTop:5,justifyContent:'center',alignItems:'center'}}>
                  {movieName.length > 14
                    ? movieName.slice(0, 20) + '...'
                    : movieName}
                </Text>
      
    </View>
  </TouchableWithoutFeedback>
  )
}

export default CardView

const styles = StyleSheet.create({})