import React from 'react'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'
import EditProfileForm from '../components/forms/EditProfileForm'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'

const EditProfile = () => {
  return (
    <View>
        <BackHeaderGreen/>
        <View>
            <Text>Change Profile Picture</Text>
        </View>
        <EditProfileForm/>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        height: 188, 
        width: 281,
        alignSelf: 'center',
        borderRadius: 100/4,
    }, 
    txt: {
        fontSize: 24,
        textAlign: 'center',
        color: '#7D3F1B',
    }
})

export default EditProfile