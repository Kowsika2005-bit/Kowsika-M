import { StyleSheet,Dimensions, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const videoplayer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Play local Video</Text>
        <Video 
           source={(require('./asset/audio.mp3'))}
           style={styles.video}
           controls
           resizeMode="contain"
           paused={true}
           />
    </View>
  )
}

const { width }=Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgreen',
        justifyContent:'center',
        alignItems:'center',
        padding:50,
    },
    text:{
       color:'red',
       fontSize:25,
       fontWeight:'bold',
       alignItems:'center',
       marginTop:50,
       marginBottom:30,
    },
    video:{
        width: width-32,
        height:(width-32)*0.5625,
    },
})
export default videoplayer;