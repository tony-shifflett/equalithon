import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const DocumentUploadForm = () => {


  return (
    <View>
        <TouchableOpacity style={styles.section}>
            <Icon name='cloud-upload' style={styles.icon}/>
            <Text style={styles.title}>Driver's License*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section}>
            <Icon name='cloud-upload' style={styles.icon}/>
            <Text style={styles.title}>Certification/Licensure*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section}>
            <Icon name='cloud-upload' style={styles.icon}/>
            <Text style={styles.title}>Business Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigSection}>
            <Icon name='cloud-upload' style={styles.icon}/>
            <View>
                <Text style={styles.title}>Other</Text>
                <Text style={styles.secondary}>Proof of additonal certifications, insurances,{'\n'} continuing education, etc.</Text>
            </View>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    section:{
        flexDirection: 'row',
        height: 100,
        borderWidth: 1,
        borderStyle: 'dotted',
        paddingLeft: 24,
        paddingTop: 24,
    },
    bigSection:{
        flexDirection: 'row',
        height: 150,
        borderWidth: 1,
        borderStyle: 'dotted',
        paddingLeft: 24,
        paddingTop: 24,
    },
    icon: {
        color: '#7D3F1B',
        fontSize: 20,

    },
    title: {
        color: '#7D3F1B',
        paddingLeft: 24,
        fontSize: 20, 
    },
    secondary: {
        paddingTop: 24,
    },
})

export default DocumentUploadForm