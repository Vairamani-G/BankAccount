import { useNavigation } from "@react-navigation/native";
import { View,Text, ScrollView, TouchableOpacity ,Pressable, Modal,TextInput } from "react-native";
import { useState,useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {Detailes} from './Detailes.json';



export default function Home() {

    const [str,setstr]=useState([])
    const route=useRoute();
    const navigation = useNavigation();
    const [nam,setnam]=useState('');
    const [email,setemail]=useState('');
    const [num,setnum]=useState('');
    const [pwd,setpwd]=useState('');
    const [newstr,setnewstr]=useState(false);

    useEffect(()=>{
        setstr(Detailes)
    },[])
    
    const remove = (iname) => 
    {
        setstr(current =>
          current.filter(str => {
            return str.UserName !== iname;
          },),
        );
        
    };

    const insert=()=>{
      setstr([...str,{UserName:nam,Email:email,PhoneNumber:num,Password:pwd}])
      setnam(" ");
      setemail(" ");
      setnum(" ");
      setpwd(" ");
      setnewstr(false);
    }

    const ins=()=>{
      setnewstr(true)      
    }

    const del=()=>{
      setnewstr(false)
    }

    return(
        <View style={{flex: 1,
            backgroundColor: 'aqua',
            paddingLeft:40,
            alignItems:'stretch',
            paddingTop:20,
            paddingRight:40,            
            letterSpacing:1.5,}}>
              <View>
            <TouchableOpacity onPress={ins}>
                <Text style={{alignItems:'stretch',
                        marginTop:30,
                        borderWidth:3,
                        height:30,
                        color:'navy', 
                        paddingLeft:135,
                        backgroundColor:'lime',
                        fontSize:24,
                        borderRadius:20,
                        paddingRight:20,
                        justifyContent: 'center'}}>Add</Text>
            </TouchableOpacity> 
            </View>
              <Modal transparent={true}
            animationType='fade'
             visible={newstr}>
              <View style={{height:200,
              flex: 1,
              backgroundColor: 'silver',
              alignItems: 'stretch',
              justifyContent: 'center',
              paddingLeft:90,
              paddingRight:90,
              letterSpacing:1.5,}}>
                <Text style={{marginTop:10,fontSize:24,}}>UserName:</Text>
                <TextInput style={{borderWidth:2,
                borderColor:'black',
                height:40,
                paddingLeft:10,
                backgroundColor:'white',
                fontSize:14,
                justifyContent: 'center',
                borderRadius:20}}
                onChangeText={(Text)=>{setnam(Text)}}/>
                <Text style={{marginTop:10,fontSize:24,}}>Email:</Text>
                <TextInput style={{borderWidth:2,
                borderColor:'black',
                height:40,
                paddingLeft:10,
                backgroundColor:'white',
                fontSize:14,
                justifyContent: 'center',
                borderRadius:20}}
                onChangeText={(Text)=>{setemail(Text)}}/>
                <Text style={{marginTop:10,fontSize:24,}}>PhoneNumber:</Text>
                <TextInput style={{borderWidth:2,
                borderColor:'black',
                height:40,
                paddingLeft:10,
                backgroundColor:'white',
                fontSize:14,
                justifyContent: 'center',
                borderRadius:20}}
                onChangeText={(Text)=>{setnum(Text)}}/>
                <Text style={{marginTop:10,fontSize:24,}}>Password:</Text>
                <TextInput style={{borderWidth:2,
                borderColor:'black',
                height:40,
                paddingLeft:10,
                backgroundColor:'white',
                fontSize:14,
                justifyContent: 'center',
                borderRadius:20}}
                onChangeText={(Text)=>{setpwd(Text)}}/>
                <View style={{flexDirection:'row'}} >
                <TouchableOpacity onPress={insert}>
                <Text style={{marginTop:40,color:'black',fontSize:24}} >Insert</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={del}>
                <Text style={{marginTop:40,color:'black',fontSize:24,paddingLeft:100,}} >Delete</Text>
              </TouchableOpacity>
                </View>
              </View>
            </Modal> 

            <ScrollView showsVerticalScrollIndicator ={false}>
            <Text style={{marginTop:20,
            height:30,
            backgroundColor:'white',
            fontSize:20,
            color:'red',
            fontWeight:'bold',
            borderRadius:30,
            paddingRight:10,
            justifyContent: 'center',
            paddingLeft:40,
            letterSpacing:1.5}}>Hello "{route.params.uname}" welcom to  Home</Text>
            {/* <View style={{paddingTop:200,}}>
            <Text style={{fontSize:34,color:'purple'}}>UserName: {route.params.uname}</Text>
            <Text style={{fontSize:34,color:'purple'}}>Email: {route.params.mail}</Text>
            <Text style={{fontSize:34,color:'purple'}}>Phone Number: {route.params.pno}</Text>
            <Text style={{fontSize:34,color:'purple'}}>c: {route.params.pass}</Text>
            </View> */}
                        
                       
            
                {str.map((item,index)=>{
                    return(
                        <View 
                        style={{alignItems:'stretch',
                        marginTop:30,
                        borderWidth:3,
                        height:170,
                        paddingLeft:25,
                        backgroundColor:'white',
                        fontSize:14,
                        borderRadius:20,
                        paddingRight:20,
                        justifyContent: 'center'}}
                        key={item.UserName}>
                            
                            <Pressable  onPress={()=>{remove(item.UserName)}}>
                                <Text style={{textAlign:'right',fontWeight:'bold',paddingLeft:45,}}>X</Text>
                            </Pressable>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Detail",{UserName:item.UserName,Email:item.Email,PhoneNumber:item.PhoneNumber,Password:item.Password})}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>UserName : {item.UserName}</Text>
                            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Email : {item.Email}</Text>
                            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Phone Number : {item.PhoneNumber}</Text>
                            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Password : {item.Password}</Text> 
                            </TouchableOpacity>                          
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}
