import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import Img from './asset/flower.jpg';

const img = () => {
  return (
    <View style={{justifyContent:'center',
      marginHorizontal:75,
      marginVertical:50,
    }}>
      {/*<Image
       source={Img}
       style={{width:200,height:200}}
       />
       {/* <Image
        source={{uri="https://www.pixelstalk.net/wp-content/uploads/image11/Aesthetic-flower-HD-desktop-wallpaper-with-soft-pastel-tones-delicate-petals-and-a-calming-atmosphere.jpg"}}
        style={{width:100,height:100}}
        /> */}
        <Image 
           source={require('./asset/flower.jpg')}
           style={{width:200,
            height:200,
            justifyContent:'center',
          }}
        />
        </View>
  )
}

export default img

const styles = StyleSheet.create({})