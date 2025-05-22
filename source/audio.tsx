import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Aud from './source/asset/audio.';

const audio = () => {
  return (
    <View>
      <Text>audio</Text>
       <audio 
         src ={Aud}
         controls={true}
         />
        {/*<audio 
         src={require('./asset/audio.mp3')}
         controls={true}
         autoPlay={true}
        />*/}
    </View>
  );
};

export default audio;

const styles = StyleSheet.create({})