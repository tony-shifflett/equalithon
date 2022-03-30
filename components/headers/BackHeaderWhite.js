import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
 

const BackHeaderWhite = ({title}) => {

    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Pressable onPress={()=>navigation.goBack()}>
                <Icon style={styles.icon} name='arrow-left'/> 
                </Pressable>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

BackHeaderWhite.defaultProps = {
    title: 'Okionu'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent: 'center',
        borderRadius: 100/4
    },
    container:{
        flexDirection: 'row', 
        width: "100%",
        alignContent: 'center', 
        alignSelf: 'center', 
        paddingTop: 60,

    },
    text: {
        color: 'black',
        fontSize: 24, 
        paddingLeft: 20,
    },
    icon: {
        fontSize: 24,
        paddingRight: 20,
        paddingLeft: 20,
        color: '#7D3F1B'
    }
})

export default BackHeaderWhite