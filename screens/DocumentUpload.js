import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import SmallButton from '../components/buttons/SmallButton'
import DocumentUploadForm from '../components/forms/DocumentUploadForm'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'

const DocumentUpload = () => {
  return (
    <View>
        <BackHeaderGreen title={'Documents Upload'}/>
        <View style={styles.progress}>
            <Image
            source={require('../assets/circle-2.png')}
            style={styles.img}
            />
        </View>
        <View style={styles.formContainer}>
            <DocumentUploadForm/>
        </View>
        <View style={styles.btn}>
            <SmallButton buttonText={'Continue'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        height: 32, 
        width: 326,
        alignSelf: 'center',
        marginTop: 24,
    }, 
    formContainer: {
        paddingTop: 24,
    },
    btn: {
        marginTop: 24,
    }
})

export default DocumentUpload