import React from 'react'
import { StyleSheet, Text, View  , TouchableOpacity   , Animated  , Easing} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View style={{flex :1 , backgroundColor : "white"  , alignItems : "center"  ,justifyContent : "center"}}> 

        <TouchableOpacity style={{margin : 10 , paddingVertical: 10 ,  paddingHorizontal : 10 ,  
            backgroundColor : "#17ff55"   , width : 200   , borderWidth : 1 , borderColor : "black"
             , borderRadius : 10 }} onPress={()=>{navigation.navigate("FadeIn")}}> 
            <Text style={{fontSize : 18 , fontWeight : "bold"  , textAlign : "center"}} >Fade In Animation  </Text>

        </TouchableOpacity>

        <TouchableOpacity style={{margin : 10 , paddingVertical: 10 ,  paddingHorizontal : 10 ,  
            backgroundColor : "#34ebcc"   , width : 200  , borderWidth : 1 , borderColor : "black"  , borderRadius : 10  }}
            onPress={()=>{navigation.navigate("ButtonAnimation")}}>
            <Text style={{fontSize : 18 , fontWeight : "bold"  , textAlign : "center"}} >Button Animation  </Text>

        </TouchableOpacity>



        <TouchableOpacity style={{margin : 10 , paddingVertical: 10 ,  paddingHorizontal : 10 ,  
            backgroundColor : "#e59afc"  , width : 200  , borderRadius : 10 ,
             borderColor : "black"  , borderWidth : 1 }} onPress={()=>{navigation.navigate("ListView")}}>
            <Text style={{fontSize : 18 , fontWeight : "bold"  , textAlign : "center"}} >List Animation  </Text>

        </TouchableOpacity>

      
    </View>
  )
}

export default Home