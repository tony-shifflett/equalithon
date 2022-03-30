import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

const LoginForm = () => {
  return (
    <View style={styles.formContainer}>
        <View style={styles.inputBox}>
            <Text style={styles.txt}>Email Address</Text>
            <View style={styles.inputStyling}>
                <TextInput/>
            </View>
        </View>
        <View style={styles.inputBox}>
            <Text style={styles.txt}>Password</Text>
            <View style={styles.inputStyling}>
                <TextInput type='password' secureTextEntry={true}/>
            </View>
        </View>
        <Pressable style={styles.btn}>
            <Text style={styles.btnTxt}>Forgot Password?</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#F2F2F2', 
    },
    inputBox: {
        borderBottomWidth: 1,
    },
    txt:{
        fontSize: 18,
        color: '#858C94',
        // paddingTop: 20,
    },
    inputStyling: {
        height: 59, 
        width: 343
    },
    btn:{
        marginTop: 24,
        
    },
    btnTxt:{
        fontSize: 20,
        color: '#7D3F1B',
    },
})

export default LoginForm