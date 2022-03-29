import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SmallButton from '../buttons/SmallButton'

const BusinessIntakeForm = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.txt}>What kind of business are you?<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput/>
            </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.txt}>What is your certification or licensure?<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput multiline={true}/>
            </View>
        </View>
        <View style={styles.box} >
            <Text style={styles.txt}>What are your specialties?<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput multiline={true}/>
            </View>
        </View>
        <View style={styles.box} >
            <Text style={styles.txt}>What is your availability?<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput multiline={true}/>
            </View>
        </View>
        <View style={styles.box} >
            <Text style={styles.txt}>Tell us about your experience<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput multiline={true}/>
            </View>
        </View>
        <View style={styles.box} >
            <Text style={styles.txt}>Do you have insurance for the services you offer?<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput multiline={true}/>
            </View>
        </View>
        <SmallButton buttonText={'Continue'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    txt: {
        alignSelf: 'flex-start',
        fontSize: 16,
        lineHeight: 24
    },
    container: {
        paddingLeft: 16,
        paddingTop: 24,
        width: 343,
        height: 332,
    },
    input: {
        height: 96, 
        width: 343,
        borderWidth: 1,
        borderColor: '#858C94', 
        borderRadius: 100/8,
    }, 
    red: {
        color: 'red',
        fontSize: 16,
        lineHeight: 24
    },
    box: {
        paddingBottom: 24,
    }
})

export default BusinessIntakeForm