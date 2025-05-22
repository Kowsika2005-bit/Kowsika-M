import react from 'react';
import {Text,TextInput,View} from 'react-native';
const Cat=()=>{
    return(
        <View>
            <Text>Hello,I am ....</Text>
            <TextInput style={{
                height:40,
                borderColor:'red',
                borderWidth:1,
            }}
            defaultValue="789"
            />
        </View>
    );
};
export default Cat;