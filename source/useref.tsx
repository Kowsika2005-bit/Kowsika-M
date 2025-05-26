import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React,{useRef} from 'react'

export default function useref(){
     const inputRef=useRef<TextInput>(null);
     const focusInput=()=>{
        inputRef.current?.focus();
     };
     return(
        <View style={styles.container}>
            <TextInput ref={inputRef} placeholder="Enter your name" style={styles.input}/>
            <Button title="Focus Input" onPress={focusInput}/>

        </View>
     );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

