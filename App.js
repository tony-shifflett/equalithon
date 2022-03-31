import React from 'react';
import SelectService from './screens/SelectService';
import LoginScreen from './screens/LoginScreen'
import EditProfile from './screens/EditProfile';
import BusinessIntake from './screens/BusinessIntake';
import ForgotPassword from './screens/ForgotPassword';
import DocumentUploadForm from './components/forms/DocumentUploadForm';
import DocumentUpload from './screens/DocumentUpload';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProviderSelection from './components/forms/ProviderSelection';


const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginScreen">
        <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}/>
        <Stack.Screen
        name='SelectService'
        component={SelectService}/>
        <Stack.Screen
        name='EditProfile'
        component={EditProfile}/>
        <Stack.Screen
        name='BusinessIntake'
        component={BusinessIntake}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App