import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const SettingSelection = () => {
  return (
    <View style={styles.form}>
        <TouchableOpacity style={styles.item}>
            <Text style={styles.txt}>Notifications</Text>
            <Icon name='chevron-right'
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Text style={styles.txt}>Manage Subscription</Text>
            <Icon name='chevron-right'
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Text style={styles.txt}>Payment on file</Text>
            <Icon name='chevron-right'
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Text style={styles.txt}>Reset Password</Text>
            <Icon name='chevron-right'
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Text style={styles.txt}>Delete Account</Text>
            <Icon name='chevron-right'
            style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.finalItem}>
            <Text style={styles.txt}>Log out</Text>
            <Icon name='chevron-right'
            style={styles.icon}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 20,
    },
    item:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 70, 
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    finalItem:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 70, 
        alignItems: 'center',
    },
    txt:{
        fontSize: 20, 
        fontWeight: '600', 
        paddingLeft: 20, 
    }, 
    icon: {
        fontSize: 20, 
        color: '#A6381F', 
        paddingRight: 20,
    }

})
export default SettingSelection