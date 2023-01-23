import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  
  const[uname,setuname]=useState('');
  const[mail,setmail]=useState('');
  const[pno,setpno]=useState('');
  const[pass,setpass]=useState('');

  const valid=()=>{
    navigation.navigate("Home",{uname:uname,mail:mail,pno:pno,pass:pass});
  }
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
      <Text style={{fontSize:32}}>Phone Number :</Text>
      <TextInput 
      style={styles.inp}
      keyboardType="numeric"
      onChangeText={(Number)=>setpno(Number)}/>
      <Text style={{fontSize:32}}>Password :</Text>
      <TextInput 
      style={styles.inp}
      onChangeText={(Text)=>setpass(Text)}/>
      <View style={{padding:50}}>
      <Button title='create' onPress={valid}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft:90,
    paddingRight:90,
    letterSpacing:1.5,
  },
  inp: {
    borderWidth:2,
    borderColor:'red',
    height:40,
    paddingLeft:10,
    backgroundColor:'white',
    fontSize:14,
    justifyContent: 'center',
  }
});
