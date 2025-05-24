import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'
//import Welcome from './welcome'

export default function userlogin({navigation}){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    return(
        <View style={styles.container}>
            <View style={styles.form}>
            <Text style={{fontSize:30,
                color:'blue',
                paddingBottom:30,
            }}> Welcome to LoginPage</Text>
            <Text style={styles.label}>Email Id</Text>
            <TextInput style={styles.input} placeholder="Enter your Email Id" value={username}
            onChangeText={setUsername}/>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input} 
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}/>
              <Button title="Login" onPress={() => navigation.navigate('Welcome')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        backgroundColor:'white',
        marginHorizontal:25,
        marginVertical:200,
    },
    form:{
        backgroundColor:'white',
        padding:20,
        borderRadius:20,
        shadowColor:"Black",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
       shadowRadius:4,
       elevation:5,
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:"bold",
    },
    input:{
        height:40,
        borderColor:"grey",
        borderWidth:1,
        marginBottom:15,
        padding:10,
        borderRadius:5,
    },
})