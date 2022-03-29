import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EditProfileForm = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.txt}>Name<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput/>
            </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.txt}>Zip Code<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput/>
            </View>
        </View>
        <View style={styles.box} >
            <Text style={styles.txt}>Bio<Text style={styles.red}>*</Text></Text>
            <View style={styles.input}>
                <TextInput/>
            </View>
        </View>
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
        height: 48, 
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

export default EditProfileForm