import React from 'react'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'
import XHeaderGreen from '../components/headers/XHeaderGreen'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const SelectService = () => {

    //state to store user type, for later usage with page availability, services, etc
    const [userType, setUserType] = useState("")

    const selectUserType =(newUserType, destination)=>{
        setUserType(newUserType)
        console.log(userType)
        navigation.navigate(destination)
    }

    const navigation = useNavigation();
    return (
        <View>
            <XHeaderGreen title="Who Are You?"/>
            <View>
                <Pressable style={styles.container} onPress={()=>selectUserType("client", "EditProfile")}>
                    <Text style={styles.txt}>I Need Postpartum Services</Text>
                    <Image
                    source={require('../assets/i-need-services.jpg')}
                    style={styles.img}/>
                </Pressable>

                <Pressable style={styles.container} onPress={()=>selectUserType("provider", "BusinessIntake")}>
                    <Text style={styles.txt}>I Provide Postpartum Services</Text>
                    <Image
                    source={require('../assets/provider-services.jpg')}
                    style={styles.img}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 188, 
        width: 281,
        alignSelf: 'center',
        borderRadius: 100/8,
    }, 
    txt: {
        fontSize: 24,
        textAlign: 'center',
        color: '#7D3F1B',
    }, 
    container: {
        paddingTop: 75,
    }
})

export default SelectService