import { View,Text,TextInput,StyleSheet,Button } from "react-native";
import { useState } from "react";

export default function Add()
{
  const[uname,setuname]=useState('');
  const[mail,setmail]=useState('');
  const[pno,setpno]=useState('');
  const[pass,setpass]=useState('');

  return (
    <View style={styles.container}>
      <Text style={{fontSize:32}}>UserName :</Text>
      <TextInput 
      style={styles.inp}
      onChangeText={(Text)=>{setuname(Text)}}/>
      <Text style={{fontSize:32}}>Email :</Text>
      <TextInput 
      style={styles.inp}
      onChangeText={(Text)=>setmail(Text)}/>
      <Text style={{fontSize:32}}>PhoneNumber :</Text>
      <TextInput 
      style={styles.inp}
      keyboardType="numeric"
      onChangeText={(Number)=>setpno(Number)}/>
      <Text style={{fontSize:32}}>Password :</Text>
      <TextInput 
      style={styles.inp}
      onChangeText={(Text)=>setpass(Text)}/>
      <View style={{padding:50}}>
      <Button title='Insert'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft:90,
    paddingRight:90,
    letterSpacing:1.5,
  },
  inp: {
    borderWidth:2,
    borderColor:'black',
    height:40,
    paddingLeft:10,
    backgroundColor:'white',
    fontSize:14,
    justifyContent: 'center',
    borderRadius:20
  }
});
