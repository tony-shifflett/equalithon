import React from 'react'
import { View } from 'react-native'
import SettingSelection from '../components/forms/SettingSelection'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'

const AccountSettings = () => {
  return (
    <View>
        <BackHeaderGreen title={'Account Settings'}/>
        <SettingSelection/>
    </View>
  )
}

export default AccountSettings