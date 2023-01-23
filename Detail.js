import { View,Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";


export default function Detail(){
    const {params:{UserName,Email,PhoneNumber,Password}}=useRoute();


    
    return(
        <View style={{alignItems:'stretch',
        flex: 1,
        backgroundColor: 'tan',
        paddingLeft:10,
        paddingRight:10,            
        letterSpacing:1.5
       }} >
             <View style={{marginTop:20,
            height:160,
            borderWidth:2,
            fontSize:14,
            backgroundColor:'white',
            paddingRight:10,
            justifyContent: 'center',
            paddingLeft:10,
            letterSpacing:1.5}}>
                <Image source={require('../assets/img.png')}
                style={{
                    height:150,
                    width:350
                }}>
                </Image>                
            </View>
             
            <View style={{marginTop:40,
            height:100,
            backgroundColor:'blue',
            fontSize:14,
            borderRadius:30,
            paddingRight:10,
            justifyContent: 'center',
            paddingLeft:50,
            letterSpacing:1.5}}>
                <Text style={{fontSize:32,color:'white',fontWeight:'bold'}}>Account Details of {UserName}</Text>
            </View>

            <View style={{marginTop:30,
            height:300,
            backgroundColor:'white',
            fontSize:14,
            borderWidth:2,
            borderRadius:30,
            paddingRight:10,
            justifyContent: 'center',
            paddingLeft:70,
            letterSpacing:1.5}}>
                <Text style={{fontSize:22}}>UserName : {UserName}</Text>
                <Text style={{fontSize:22,paddingTop:20}}>Email : {Email}</Text>
                <Text style={{fontSize:22,paddingTop:20}}>PhoneNumber : {PhoneNumber}</Text>
                <Text style={{fontSize:22,paddingTop:20}}>Password : {Password}</Text>
            </View>
        </View>
    );
}   
