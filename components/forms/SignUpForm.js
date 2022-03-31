import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const SignUpForm = () => {
  return (
    <View style={styles.formContainer}>
        <View style={styles.inputBox}>
            <Text style={styles.txt}>First Name</Text>
            <View style={styles.inputStyling}>
                <TextInput/>
            </View>
        </View>
        <View style={styles.inputBox}>
            <Text style={styles.txt}>Last Name</Text>
            <View style={styles.inputStyling}>
                <TextInput/>
            </View>    
        </View>
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
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#F2F2F2'
    },
    inputBox: {
        borderBottomWidth: 1,
    },
    txt:{
        fontSize: 18,
        color: '#858C94',
    },
    inputStyling: {
        height: 59, 
        width: 343
    },
})

export default SignUpForm