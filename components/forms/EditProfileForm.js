import React from 'react'
import { View, Text, TextInput } from 'react-native'

const EditProfileForm = () => {
  return (
    <View>
        <Text>Name*</Text>
        <TextInput/>
        <Text>Zip Code*</Text>
        <TextInput/>
        <Text>Bio*</Text>
        <TextInput/>
    </View>
  )
}

export default EditProfileForm