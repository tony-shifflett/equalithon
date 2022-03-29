import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SmallButton from '../components/buttons/SmallButton'
import BackHeaderWhite from '../components/headers/BackHeaderWhite'

const ForgotPassword = () => {
  return (
    <View style={styles.body}>
        <BackHeaderWhite title='Forgot Password' />
        <View style={styles.textContainer}>
            <Text style={styles.mainText}>Enter the Email associated with 
                your account and we'll send an email with instructions to reset
                your password.
            </Text>
        </View>
        <View style={styles.emailInput}>
            <Text style={styles.emailLabel}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput/>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <SmallButton buttonText={'Submit'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F2F2F2',
        height: '100%'
    },
    textContainer:{
        height: 100, 
        width: 310,
        alignSelf: 'center',
        marginTop: 48,
    },
    mainText: {
        textAlign: 'center',
        fontSize: 20,
    },
    emailInput: {
        marginTop: 48,
        alignSelf: 'center',
    },
    emailLabel: {
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 20,
        marginBottom: 10,  
    },
    inputContainer: {
        backgroundColor: 'white',
        borderWidth: 1, 
        borderColor: '#858C94', 
        borderRadius: 100/8,
        width: 343, 
        height: 48,
         
    },
    buttonContainer: {
        marginTop: 245, 
    },
})

export default ForgotPassword