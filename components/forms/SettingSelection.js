import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const SettingSelection = () => {
  return (
    <View>
        <TouchableOpacity>
            <Text>Notifications</Text>
            <Icon/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Manage Subscription</Text>
            <Icon/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Payment on file</Text>
            <Icon/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Reset Password</Text>
            <Icon/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Delete Account</Text>
            <Icon/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Log out</Text>
            <Icon/>
        </TouchableOpacity>
    </View>
  )
}

export default SettingSelection