import React,{useState,useMemo} from 'react';
import {View,Text,Button} from 'react-native';

export default function Counter(){
    const [count,setCount]=useState(15);
    const [decrement,setDecrement]=useState(10);
    
    const computedMessage=useMemo(()=>{
        return `The result of count minus decrement is:${count-decrement}`;
} ,[count,decrement]);
return(
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Count: {count}</Text>
        <Button title="Increase" onPress={()=>setCount(count+1)}/>
        <Text>Decrement: {decrement}</Text>
        <Button title="Decrement" onPress={()=>setDecrement(decrement-1)}/>

            <Text>{computedMessage}</Text>
    </View>
);
}