import React, {useState} from 'react';
import { View } from 'react-native';
import LogoHeader from '../components/headers/LogoHeader';
import OptionsBar from '../components/OptionsBar';
import LargeButton from '../components/buttons/LargeButton';
import SmallButton from '../components/buttons/SmallButton';
import SignUpForm from '../components/forms/SignUpForm';
import LoginForm from '../components/forms/LoginForm';

const LoginScreen = () => {
    const [form, setForm] = useState('login')
    const formStateChange = (formName)=>{
        setForm(formName)
    }
    let buttonText
    const checkState = () =>{
        if (form == 'signup'){
            buttonText = 'Sign Up'
            return <SignUpForm/>
        } else if (form == 'login'){
            buttonText = 'Log in'
            return <LoginForm/>
        }
    }
  return (
    <View>
        <LogoHeader/>
        <OptionsBar formSelector = {formStateChange}/>
        {checkState()}
        {form == 'login' ? <LargeButton buttonText={buttonText} destination='SelectService'/> : <SmallButton buttonText={buttonText} destination='SelectService'/>}
    </View>
  )
}

export default LoginScreen