import React from 'react'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'
import SmallButton from '../components/buttons/SmallButton'
import EditProfileForm from '../components/forms/EditProfileForm'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'

const EditProfile = () => {
  return (
    <View>
        {/* <BackHeaderGreen/> */}
        <BackHeaderGreen title={'Edit Profile'}/>
        <View>
            <Image 
            source={require('../assets/profile.png')}
            style={styles.profile}/>
            <Text style={styles.txt}>Change Profile Picture</Text>
        </View>
        <View style={styles.form}>
            <EditProfileForm/>
        </View>
        <SmallButton buttonText={'Done'}/>
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
    },
    profile:{
        height: 96, 
        width: 96, 
        alignSelf: 'center',
        marginTop: 34,
        marginBottom: 12,
    },
})

export default EditProfile