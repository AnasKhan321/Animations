import React,{useRef} from 'react'
import { StyleSheet, Text, View  , TouchableOpacity   , Animated  , Easing} from 'react-native';
const ButtonAnimation = () => {


    const rotationAnim = useRef(new Animated.Value(0)).current; 
    const onPress = () => {
     
        Animated.timing(rotationAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start();
  
        if(rotationAnim._value == 1 ){
          Animated.timing(rotationAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }).start();
        }
      
  
    };

    const interpolatedRotateAnimation = rotationAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
  return (
        <View style={{flex : 1 , justifyContent : "center"  , alignItems : "center"  }}>

        <TouchableOpacity onPress={onPress} style={{ transform: [{ rotate: interpolatedRotateAnimation}]  , backgroundColor : "#ff0080" , padding : 10  , 
            borderWidth : 2 , borderColor : "black"  , borderRadius : 10   , width : 200 }}>

            <Text style={{color : "white"  , fontSize : 20 , fontWeight : "bold"  , 
        textAlign : 'center' }}>Press Me  </Text>

        </TouchableOpacity>
        </View>
  )
}

export default ButtonAnimation