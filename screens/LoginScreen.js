import React, {useState} from 'react';
import { View } from 'react-native';
import LogoHeader from '../components/headers/LogoHeader';
import OptionsBar from '../components/OptionsBar';
import LargeButton from '../components/buttons/LargeButton'
import SignUpForm from '../components/forms/SignUpForm';
import LoginForm from '../components/forms/LoginForm';

const LoginScreen = () => {
    const [form, setForm] = useState("")
    const formStateChange = (formName)=>{
        setForm(formName)
        console.log(form)
    }

    const checkState = () =>{
        console.log('rerendering')
        if (form == 'signup'){
            return <SignUpForm/>
        } else if (form == 'login'){
            return <LoginForm/>
        }
    }
  return (
    <View>
        <LogoHeader/>
        <OptionsBar formSelector = {formStateChange}/>
        {checkState()}
        <LargeButton/>
    </View>
  )
}

export default LoginScreen