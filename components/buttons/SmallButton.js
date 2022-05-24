import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SmallButton = ({buttonText, destination, isNavigable}) => {
    const navigation = useNavigation()
    let pressHandler
    pressHandler = ()=>{ navigation.navigate(destination)}
  

    return (
    <Pressable style={styles.btn}
     onPress={()=>pressHandler()}>
        <Text style={styles.btnTxt}>{buttonText}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row', 
        backgroundColor:"#a6381fff",
        borderRadius: 100/2,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 129,
        height: 48,
    },
    btnTxt: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
})

SmallButton.defaultProps = {
    buttonText: 'Press Me',
    destination: 'LoginScreen', 
    isNavigable: true, 
}

export default SmallButton